let kue = require('kue');
let env = require('../../config/env');

// 消息队列
let Queue = kue.createQueue({
    prefix: 'queue',
    redis: {
      port: env.redis.port,
      host: env.redis.host,
      auth: env.redis.password,
      db: 3,
      options: {}
    }
  });

  module.exports = Queue;