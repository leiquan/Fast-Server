let schedule = require('node-schedule');
 
let job = schedule.scheduleJob('* * * * * *', function(){
    console.log(new Date())
});

module.exports = job;