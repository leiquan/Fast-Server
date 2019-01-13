let e = function () {

    global.event.on('some_event', function (data) {
        console.log('打印事件：' + data);
    });
    
}


module.exports = e();