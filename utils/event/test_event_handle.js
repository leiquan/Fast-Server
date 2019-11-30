let event = require("./__event");


let test_event_handle = event.on('some_event', function (data) {
    console.log('打印测试事件：' + data);
});


module.exports = test_event_handle;