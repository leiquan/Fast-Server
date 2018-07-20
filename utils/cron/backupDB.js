
let CronJob = require('cron').CronJob;
let serviceDbBackup = require('../service/dbBackup');

// 执行回调，参数顺序为： Seconds: 0 - 59，Minutes: 0 - 59，Hours: 0 - 23，Day of Month: 1 - 31，Months: 0 - 11，Day of Week: 0 - 6
let job = new CronJob('* * * * * *', function () {

    console.log(new Date())

}, function () {
    // 停止后的回调
},
    true // 立即开始任务
);

module.exports = job;