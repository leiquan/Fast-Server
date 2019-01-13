let env = require('../config/env');
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
        title: 'welcome email for tj',
        to: 'tj@learnboost.com',
        template: 'welcome-email',
        time: new Date()

    }).save(function (err) {
        if (!err) console.log(job.id);
    });
}