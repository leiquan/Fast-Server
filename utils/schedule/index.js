var schedule = require('node-schedule');
 
var job = schedule.scheduleJob('* * * * * *', function(){
    console.log(new Date())
});

module.exports = job;