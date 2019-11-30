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

Queue.on('job enqueue', function (id, type) {
    // 可以持久化到数据库，便于后续分析
    console.log('任务 %s 已经加入队列, %s', id, type);
});

Queue.on('job complete', function (id, result) {
    kue.Job.get(id, function (err, job) {
        if (err) return;
        job.remove(function (err) {
            // 可以持久化到数据库，便于后续分析
            if (err) throw err;
            console.log('队列任务已经完成并移除: %d', job.id);
        });
    });
});

  module.exports = Queue;