let event = require("./__event");

let e = function () {

    event.on('some_event', function (data) {
        console.log('打印测试事件：' + data);
    });
    
}


module.exports = e();