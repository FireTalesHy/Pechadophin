// Statistiques des joueurs actifs : réservées aux comptes développeurs.
// POST /api/stats  { id, g, c } : « battement » anonyme envoyé par chaque page ouverte (id aléatoire, g = connecté Google, c = sauvegarde cloud activée).
// GET  /api/stats  (Authorization: Bearer <jeton Google>) : joueurs actifs à l'instant, par heure (24 h) et par jour (14 j). Le jeton est vérifié côté serveur
// et l'empreinte SHA-256 de l'e-mail doit figurer dans la liste des comptes développeurs.
const crypto = require('crypto');
const CLIENT_ID = '613987510700-0gp3rfu2tmcm32uu0aun7q1lmubl8vav.apps.googleusercontent.com';
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOK = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const DEV_HASHES = ['e25b16544775982eeb8ea2148661d8046bfc4e0eded6e98f6f27dc69fae69eb7', '859183087dc35fabb8678f375619b54dcf4a6d7debc07857c1473d58642abd66', '07dbd3962802857fc4b3922f5288d16bfabd6a327ccb68906ba2b689c89169f8', '0a396f3832c858e95864aa6ad5572dd6b22caa6e3755c4552bde2713fdb5008f', '6917af166438ce49b81eef7409fe7b9d7ee94b19908f727f7ff91bbe4484922a'];
const ACTIVE_MS = 90 * 1000;   // « actif à l'instant » = battement reçu dans les 90 dernières secondes
const KEEP_MS = 10 * 60 * 1000;

async function pipeline(cmds) {
  const r = await fetch(URL_ + '/pipeline', { method: 'POST', headers: { Authorization: 'Bearer ' + TOK, 'Content-Type': 'application/json' }, body: JSON.stringify(cmds) });
  const j = await r.json();
  if (!Array.isArray(j)) throw new Error('redis');
  return j.map(x => { if (x.error) throw new Error(x.error); return x.result; });
}
// date / heure à Paris, au format AAAA-MM-JJ et AAAA-MM-JJTHH
function parts(ts) {
  const f = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Paris', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', hourCycle: 'h23' });
  const o = {}; for (const p of f.formatToParts(new Date(ts))) o[p.type] = p.value;
  return { d: o.year + '-' + o.month + '-' + o.day, h: o.year + '-' + o.month + '-' + o.day + 'T' + o.hour };
}
async function isDev(cred) {
  const v = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(cred));
  const t = await v.json();
  if (!v.ok || t.aud !== CLIENT_ID || !t.email || String(t.email_verified) !== 'true') return false;
  const h = crypto.createHash('sha256').update(String(t.email).trim().toLowerCase()).digest('hex');
  return DEV_HASHES.includes(h);
}
module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (!URL_ || !TOK) { res.status(500).json({ error: 'storage' }); return; }
  try {
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const id = String(body.id || '').replace(/[^a-zA-Z0-9]/g, '').slice(0, 32);
      if (id.length < 8) { res.status(400).json({ error: 'bad' }); return; }
      const now = Date.now(), p = parts(now), g = body.g ? 1 : 0, c = body.c ? 1 : 0;
      const cmds = [
        ['ZADD', 'act:now', now, id], ['ZREMRANGEBYSCORE', 'act:now', '-inf', now - KEEP_MS],
        ['PFADD', 'act:d:' + p.d, id], ['EXPIRE', 'act:d:' + p.d, 40 * 86400],
        ['PFADD', 'act:h:' + p.h, id], ['EXPIRE', 'act:h:' + p.h, 3 * 86400],
      ];
      if (g) cmds.push(['ZADD', 'act:nowg', now, id], ['ZREMRANGEBYSCORE', 'act:nowg', '-inf', now - KEEP_MS], ['PFADD', 'act:dg:' + p.d, id], ['EXPIRE', 'act:dg:' + p.d, 40 * 86400]);
      if (c) cmds.push(['ZADD', 'act:nowc', now, id], ['ZREMRANGEBYSCORE', 'act:nowc', '-inf', now - KEEP_MS], ['PFADD', 'act:dc:' + p.d, id], ['EXPIRE', 'act:dc:' + p.d, 40 * 86400]);
      await pipeline(cmds);
      res.status(200).json({ ok: 1 }); return;
    }
    if (req.method === 'GET') {
      const auth = String(req.headers.authorization || '');
      const cred = auth.startsWith('Bearer ') ? auth.slice(7) : '';
      if (!cred || !(await isDev(cred))) { res.status(403).json({ error: 'forbidden' }); return; }
      const now = Date.now(), cmds = [];
      const since = now - ACTIVE_MS;
      cmds.push(['ZCOUNT', 'act:now', since, '+inf'], ['ZCOUNT', 'act:nowg', since, '+inf'], ['ZCOUNT', 'act:nowc', since, '+inf']);
      const days = [], hours = [];
      for (let i = 13; i >= 0; i--) days.push(parts(now - i * 86400000).d);
      for (let i = 23; i >= 0; i--) hours.push(parts(now - i * 3600000).h);
      for (const d of days) cmds.push(['PFCOUNT', 'act:d:' + d], ['PFCOUNT', 'act:dg:' + d], ['PFCOUNT', 'act:dc:' + d]);
      for (const h of hours) cmds.push(['PFCOUNT', 'act:h:' + h]);
      const r = await pipeline(cmds);
      let k = 3;
      const out = { now: { all: r[0], google: r[1], cloud: r[2] }, days: [], hours: [] };
      for (const d of days) { out.days.push({ d, n: r[k], g: r[k + 1], c: r[k + 2] }); k += 3; }
      for (const h of hours) { out.hours.push({ h: h.slice(11), n: r[k++] }); }
      res.status(200).json(out); return;
    }
    res.status(405).json({ error: 'method' });
  } catch (e) { res.status(500).json({ error: 'server' }); }
};
