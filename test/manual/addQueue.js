let env = require('../../config/env');
let kue = require('kue');

let queue = kue.createQueue({
    prefix: 'queue',
    redis: {
        port: env.redis.port,
        host: env.redis.host,
        auth: env.redis.password,
        db: 3,
        options: {}
    }
});

for (let i = 0; i < 100; i++) {
    let job = queue.create('email', {
        title: 'test email',
        to: 'test@test.com',
        content: 'code 1234',
        time: new Date()
    }).save(function (err) {
        if (!err) console.log(job.id);
    });
}