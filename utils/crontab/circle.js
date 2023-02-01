let schedule = require('node-schedule');
 
let job = schedule.scheduleJob('* * * * * *', function(){
    console.log('我是一个周期任务', new Date())
});

module.exports = job;