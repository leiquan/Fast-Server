let env = require('./env');
let Redis = require('ioredis');
let redis = new Redis({
  port: env.redis.port,
  host: env.redis.host,
  family: env.redis.family,
  password: env.redis.password,
  db: env.redis.db,
});

module.exports = redis;