let schedule = require('node-schedule');

let date = new Date(2019, 1, 14, 3, 43, 10);

let job = schedule.scheduleJob(date, function () {
    console.log('Hello，我是个定时任务！')
});

module.exports = job;