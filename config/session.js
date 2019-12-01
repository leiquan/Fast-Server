let env = require('./env');
let redisStore = require('koa-redis');
let session = {
  key: 'SSID',
  rolling: true,
  cookie: {
    path: '/',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,  //cookie 有效期1天，默认为 session 的 ttl
    overwrite: true,
    signed: true
  },
  store: redisStore({
    host: env.redis.host,
    port: env.redis.port,
    auth_pass: env.redis.password,
    db: 0, // session 放在 db0,log 放在 db1
  })
};

module.exports = session;