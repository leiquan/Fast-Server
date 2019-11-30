let kue = require('kue');
let queue = require('./__queue');

let email = queue.process('email', function (job, done) {
    console.log("正在处理队列任务: " + job.id + "...");
    setTimeout(function () {
        done();
    }, 1000);
});


module.exports = email;