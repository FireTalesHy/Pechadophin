// Duels asynchrones : un joueur fait une course (règles du speedrun) sur une graine, on garde son temps et son « fantôme ».
// Un autre joueur rejoint avec le code, refait la même course en voyant le fantôme, et son temps est ajouté aux résultats.
// POST /api/duel { act:'create', seed, w, t, sk, n, gh }  -> { code }
// POST /api/duel { act:'result', c, t, sk, n }            -> { res }
// GET  /api/duel?c=CODE                                     -> { seed, w, t, sk, n, gh, res }
// Combat PvP en direct (WebRTC, pair à pair) : ce serveur ne sert qu'à mettre les deux navigateurs en relation (échange des descriptions SDP).
// POST /api/duel { act:'room' }                       -> { code }        salon gardé 10 min
// POST /api/duel { act:'offer'|'answer', c, sdp }     -> { ok }          l'hôte dépose son offre, l'invité sa réponse (une seule)
// GET  /api/duel?p=CODE&k=o|a                         -> { sdp }         sdp = null tant que rien n'est déposé
// GET  /api/duel?ice=1                                -> { iceServers, turn }   serveurs STUN/TURN pour la connexion PvP.
//   Un serveur TURN (relais) est indispensable pour les navigateurs qui bloquent les connexions directes (Opera GX avec « Disable non-proxied UDP », Brave, VPN…).
//   Cloudflare Realtime TURN : variables d'environnement CF_TURN_KEY_ID + CF_TURN_KEY_TOKEN ; ou un TURN fixe : TURN_URLS (séparées par des virgules), TURN_USERNAME, TURN_CREDENTIAL.
// Salons publics : POST { act:'room', pub:1, n, w, sk } les liste ; l'hôte envoie { act:'ping', c } toutes les 20 s, { act:'close', c } s'il annule.
// GET  /api/duel?pub=1                                -> { rooms:[{c,n,w,sk,at}] }   salons publics en attente (ping de moins de 45 s, pas encore rejoints)
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOK = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const TTL = 30 * 86400;            // un duel reste 30 jours
const WEAPONS = ['trident', 'tarot', 'dagger', 'tentacle'];
const ABC = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // pas de 0/O ni 1/I/L
const MAX_T = 20 * 60;             // 20 min max
const MAX_GH = 400000;             // taille max du fantôme (caractères)
const ROOM_TTL = 600, MAX_SDP = 20000, PUB_ALIVE = 45 * 1000;

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
    if (req.method === 'GET' && (req.query && req.query.ice || /[?&]ice=/.test(req.url || ''))) {   // configuration réseau du PvP
      const ice = [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun.cloudflare.com:3478'] }];
      let turn = false;
      if (process.env.CF_TURN_KEY_ID && process.env.CF_TURN_KEY_TOKEN) {
        const [cached] = await pipeline([['GET', 'pvp:ice']]);
        let list = null;
        if (cached) { try { list = JSON.parse(cached); } catch (e) {} }
        if (!list) {
          try {
            const r = await fetch('https://rtc.live.cloudflare.com/v1/turn/keys/' + process.env.CF_TURN_KEY_ID + '/credentials/generate-ice-servers', { method: 'POST', headers: { Authorization: 'Bearer ' + process.env.CF_TURN_KEY_TOKEN, 'Content-Type': 'application/json' }, body: JSON.stringify({ ttl: 86400 }) });
            const j = await r.json();
            const arr = Array.isArray(j.iceServers) ? j.iceServers : j.iceServers ? [j.iceServers] : [];
            list = arr.map(s => Object.assign({}, s, { urls: [].concat(s.urls || []).filter(u => !/:53(\?|$)/.test(u)) })).filter(s => s.urls.length && s.username);   // le port 53 est bloqué par les navigateurs
            if (list.length) await pipeline([['SET', 'pvp:ice', JSON.stringify(list), 'EX', 12 * 3600]]);
          } catch (e) { list = null; }
        }
        if (list && list.length) { ice.push(...list); turn = true; }
      } else if (process.env.TURN_URLS && process.env.TURN_USERNAME) {
        ice.push({ urls: process.env.TURN_URLS.split(',').map(s => s.trim()).filter(Boolean), username: process.env.TURN_USERNAME, credential: process.env.TURN_CREDENTIAL || '' });
        turn = true;
      }
      res.status(200).json({ iceServers: ice, turn });
      return;
    }
    if (req.method === 'GET' && (req.query && req.query.pub || /[?&]pub=/.test(req.url || ''))) {   // liste des salons publics
      const now = Date.now();
      await pipeline([['ZREMRANGEBYSCORE', 'pvp:pub', '-inf', now - PUB_ALIVE]]);
      const [codes] = await pipeline([['ZREVRANGE', 'pvp:pub', 0, 19]]);
      const list = codes || [];
      if (!list.length) { res.status(200).json({ rooms: [] }); return; }
      const r = await pipeline(list.flatMap(c => [['GET', 'pvp:' + c + ':m'], ['EXISTS', 'pvp:' + c + ':o'], ['EXISTS', 'pvp:' + c + ':a']]));
      const rooms = [];
      list.forEach((c, i) => { const m = r[i * 3], o = r[i * 3 + 1], a = r[i * 3 + 2]; if (!m || !o || a) return; try { rooms.push(Object.assign({ c }, JSON.parse(m))); } catch (e) {} });
      res.status(200).json({ rooms });
      return;
    }
    if (req.method === 'GET' && (req.query && req.query.p || /[?&]p=/.test(req.url || ''))) {   // signalisation PvP
      const q = req.query && req.query.p ? req.query : Object.fromEntries(new URL(req.url, 'http://x').searchParams);
      const c = normCode(q.p), k = q.k === 'a' ? 'a' : 'o';
      if (c.length !== 6) { res.status(400).json({ error: 'bad' }); return; }
      const [room, sdp] = await pipeline([['EXISTS', 'pvp:' + c], ['GET', 'pvp:' + c + ':' + k]]);
      if (!room) { res.status(404).json({ error: 'notfound' }); return; }
      res.status(200).json({ sdp: sdp || null });
      return;
    }
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
    if (body.act === 'room') {
      for (let i = 0; i < 6; i++) {
        const c = newCode();
        const [ok] = await pipeline([['SET', 'pvp:' + c, String(Date.now()), 'NX', 'EX', ROOM_TTL]]);
        if (ok) {
          if (body.pub) {   // salon public : visible dans la liste
            const m = { n: clean(body.n, 16) || 'JOUEUR', w: WEAPONS.includes(body.w) ? body.w : 'trident', sk: skin(body.sk), at: Date.now() };
            await pipeline([['SET', 'pvp:' + c + ':m', JSON.stringify(m), 'EX', ROOM_TTL], ['ZADD', 'pvp:pub', Date.now(), c]]);
          }
          res.status(200).json({ code: c }); return;
        }
      }
      res.status(500).json({ error: 'code' });
      return;
    }
    if (body.act === 'offer' || body.act === 'answer') {
      const c = normCode(body.c), sdp = String(body.sdp || '');
      if (c.length !== 6 || !sdp || sdp.length > MAX_SDP) { res.status(400).json({ error: 'bad' }); return; }
      const [room] = await pipeline([['EXISTS', 'pvp:' + c]]);
      if (!room) { res.status(404).json({ error: 'notfound' }); return; }
      const k = 'pvp:' + c + ':' + (body.act === 'offer' ? 'o' : 'a');
      const [ok] = await pipeline([body.act === 'offer' ? ['SET', k, sdp, 'EX', ROOM_TTL] : ['SET', k, sdp, 'NX', 'EX', ROOM_TTL]]);
      if (!ok) { res.status(409).json({ error: 'full' }); return; }
      if (body.act === 'answer') await pipeline([['ZREM', 'pvp:pub', c]]);   // rejoint : il quitte la liste publique
      res.status(200).json({ ok: 1 });
      return;
    }
    if (body.act === 'ping' || body.act === 'close') {
      const c = normCode(body.c);
      if (c.length !== 6) { res.status(400).json({ error: 'bad' }); return; }
      if (body.act === 'close') { await pipeline([['ZREM', 'pvp:pub', c], ['DEL', 'pvp:' + c + ':m']]); res.status(200).json({ ok: 1 }); return; }
      const [m, a] = await pipeline([['EXISTS', 'pvp:' + c + ':m'], ['EXISTS', 'pvp:' + c + ':a']]);
      if (m && !a) await pipeline([['ZADD', 'pvp:pub', Date.now(), c]]);
      res.status(200).json({ ok: 1 });
      return;
    }
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
