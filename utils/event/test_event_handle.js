let event = require("./__event");


let test_event_handle = event.on('some_event', function (data) {
    console.log('收到了测试事件：' + data);
});


module.exports = test_event_handle;