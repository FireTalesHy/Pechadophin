// Classement du mode Anarchie : top 10 all time des joueurs connectés avec Google.
// Stockage : Upstash Redis (intégration Vercel). Le jeton Google est vérifié côté serveur.
const CLIENT_ID = '613987510700-0gp3rfu2tmcm32uu0aun7q1lmubl8vav.apps.googleusercontent.com';
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOK = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(cmd) {
  const r = await fetch(URL_, { method: 'POST', headers: { Authorization: 'Bearer ' + TOK, 'Content-Type': 'application/json' }, body: JSON.stringify(cmd) });
  const j = await r.json();
  if (j.error) throw new Error(j.error);
  return j.result;
}
async function top() {
  const a = (await redis(['ZREVRANGE', 'anarchy', 0, 9, 'WITHSCORES'])) || [];
  const out = [];
  for (let i = 0; i < a.length; i += 2) out.push({ sub: a[i], score: Number(a[i + 1]) });
  if (out.length) {
    const names = await redis(['HMGET', 'anarchy:names', ...out.map(o => o.sub)]);
    out.forEach((o, i) => { o.name = names[i] || '???'; delete o.sub; });
  }
  return out;
}
module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  if (!URL_ || !TOK) { res.status(500).json({ error: 'storage' }); return; }
  try {
    if (req.method === 'GET') { res.status(200).json({ top: await top() }); return; }
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const sc = Math.floor(Number(body.score));
      if (!body.credential || !(sc > 0) || sc > 1e9) { res.status(400).json({ error: 'bad' }); return; }
      const v = await fetch('https://oauth2.googleapis.com/tokeninfo?id_token=' + encodeURIComponent(body.credential));
      const t = await v.json();
      if (!v.ok || t.aud !== CLIENT_ID || !t.sub) { res.status(401).json({ error: 'auth' }); return; }
      let name = String(body.name || '').replace(/[<>]/g, '').trim().slice(0, 16);
      if (name.length < 2) name = 'Joueur';   // pseudo choisi par le joueur à la connexion
      await redis(['ZADD', 'anarchy', 'GT', sc, t.sub]);   // garde le meilleur score de chaque joueur
      await redis(['HSET', 'anarchy:names', t.sub, name]);
      res.status(200).json({ top: await top() });
      return;
    }
    res.status(405).json({ error: 'method' });
  } catch (e) { res.status(500).json({ error: 'server' }); }
};
