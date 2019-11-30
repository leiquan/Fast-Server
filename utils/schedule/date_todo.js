var schedule = require('node-schedule');

var date = new Date(2019, 1, 14, 3, 43, 10);

var job = schedule.scheduleJob(date, function () {
    console.log('Hello，我是个定时任务！')
});

module.exports = job;