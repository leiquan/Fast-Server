let kue = require('kue');
let queue = require('./__queue');

let queueList = function () {

    queue.process('email', function (job, done) {
        console.log("正在处理队列任务: " + job.id + "...");
        setTimeout(function () {
            done();
        }, 1000);
    });

    queue.on('job enqueue', function (id, type) {
        console.log('任务 %s 已经加入队列, %s', id, type);
    });

    queue.on('job complete', function (id, result) {
        kue.Job.get(id, function (err, job) {
            if (err) return;
            job.remove(function (err) {
                if (err) throw err;
                console.log('队列任务已经完成并移除: %d', job.id);
            });
        });
    });

}


module.exports = queueList();