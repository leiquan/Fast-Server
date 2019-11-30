let event = require("./__event");


// 这里应嘎是维护一个事件响应列表，如果有很多复杂的处理，应该从外部引入，这里只是一个监听目录，避免冗余
let eventList = function () {

    event.on('some_event', function (data) {
        console.log('打印测试事件：' + data);
    });
    
}


module.exports = eventList();