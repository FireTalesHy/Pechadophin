// Duels asynchrones : un joueur fait une course (règles du speedrun) sur une graine, on garde son temps et son « fantôme ».
// Un autre joueur rejoint avec le code, refait la même course en voyant le fantôme, et son temps est ajouté aux résultats.
// POST /api/duel { act:'create', seed, w, t, sk, n, gh }  -> { code }
// POST /api/duel { act:'result', c, t, sk, n }            -> { res }
// GET  /api/duel?c=CODE                                     -> { seed, w, t, sk, n, gh, res }
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOK = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const TTL = 30 * 86400;            // un duel reste 30 jours
const WEAPONS = ['trident', 'tarot', 'dagger', 'tentacle'];
const ABC = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // pas de 0/O ni 1/I/L
const MAX_T = 20 * 60;             // 20 min max
const MAX_GH = 400000;             // taille max du fantôme (caractères)

async function pipeline(cmds) {
  const r = await fetch(URL_ + '/pipeline', { method: 'POST', headers: { Authorization: 'Bearer ' + TOK, 'Content-Type': 'application/json' }, body: JSON.stringify(cmds) });
  const j = await r.json();
  if (!Array.isArray(j)) throw new Error('redis');
  return j.map(x => { if (x.error) throw new Error(x.error); return x.result; });
}
const clean = (s, n) => String(s || '').replace(/[<>\u0000-\u001f]/g, '').trim().slice(0, n);
const okT = t => typeof t === 'number' && isFinite(t) && t >= 10 && t <= MAX_T;
const skin = s => clean(s, 24).replace(/[^a-zA-Z0-9_-]/g, '');
const normCode = c => String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
function newCode() { let s = ''; for (let i = 0; i < 6; i++) s += ABC[Math.floor(Math.random() * ABC.length)]; return s; }
const sortRes = res => res.sort((a, b) => a.t - b.t);

async function limited(req) {   // max 30 écritures par minute et par IP
  const ip = String((req.headers['x-forwarded-for'] || '').split(',')[0] || req.socket && req.socket.remoteAddress || 'x').slice(0, 64);
  const k = 'duel:rl:' + ip;
  const [n] = await pipeline([['INCR', k], ['EXPIRE', k, 60]]);
  return n > 30;
}

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (!URL_ || !TOK) { res.status(500).json({ error: 'storage' }); return; }
  try {
    if (req.method === 'GET') {
      const c = normCode(req.query && req.query.c || new URL(req.url, 'http://x').searchParams.get('c'));
      if (c.length !== 6) { res.status(400).json({ error: 'bad' }); return; }
      const [d, r] = await pipeline([['GET', 'duel:' + c], ['LRANGE', 'duel:' + c + ':r', 0, 99]]);
      if (!d) { res.status(404).json({ error: 'notfound' }); return; }
      const out = JSON.parse(d);
      out.res = sortRes((r || []).map(x => { try { return JSON.parse(x); } catch (e) { return null; } }).filter(Boolean));
      out.code = c;
      res.status(200).json(out);
      return;
    }
    if (req.method !== 'POST') { res.status(405).json({ error: 'method' }); return; }
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    if (await limited(req)) { res.status(429).json({ error: 'slow' }); return; }
    if (body.act === 'create') {
      const seed = Number(body.seed) | 0, w = String(body.w || ''), t = Number(body.t), gh = String(body.gh || '');
      if (!WEAPONS.includes(w) || !okT(t) || !gh || gh.length > MAX_GH) { res.status(400).json({ error: 'bad' }); return; }
      const d = { seed, w, t: Math.round(t * 100) / 100, sk: skin(body.sk), n: clean(body.n, 16) || 'JOUEUR', gh, at: Date.now() };
      for (let i = 0; i < 6; i++) {   // code unique
        const c = newCode();
        const [ok] = await pipeline([['SET', 'duel:' + c, JSON.stringify(d), 'NX', 'EX', TTL]]);
        if (ok) { res.status(200).json({ code: c }); return; }
      }
      res.status(500).json({ error: 'code' });
      return;
    }
    if (body.act === 'result') {
      const c = normCode(body.c), t = Number(body.t);
      if (c.length !== 6 || !okT(t)) { res.status(400).json({ error: 'bad' }); return; }
      const [ex] = await pipeline([['EXISTS', 'duel:' + c]]);
      if (!ex) { res.status(404).json({ error: 'notfound' }); return; }
      const r = { t: Math.round(t * 100) / 100, sk: skin(body.sk), n: clean(body.n, 16) || 'JOUEUR', at: Date.now() };
      const k = 'duel:' + c + ':r';
      const [, , , list] = await pipeline([['RPUSH', k, JSON.stringify(r)], ['LTRIM', k, -100, -1], ['EXPIRE', k, TTL], ['LRANGE', k, 0, 99]]);
      res.status(200).json({ res: sortRes((list || []).map(x => { try { return JSON.parse(x); } catch (e) { return null; } }).filter(Boolean)) });
      return;
    }
    res.status(400).json({ error: 'bad' });
  } catch (e) {
    res.status(500).json({ error: 'server' });
  }
};
