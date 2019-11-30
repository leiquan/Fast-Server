let io = require("socket.io");

// 用数组保存全部socket会话，以供使用
var allClients = [];

// 此函数不能被多次调用，否则会话数量将出现错误
module.exports = function(server) {
  let socket = io(server);

  // 通用处理，管理会话池
  socket.on("connection", client => {
    allClients.push(client);

    client.on("disconnect", reason => {
      var index = allClients.indexOf(client);
      allClients.splice(index, 1);
    });

    // 自定义处理方法，收到了来自客户端的消息
    client.on("send", data => {
      console.log(data);
    });

    // 私发消息，这里要一对一的发，确定接收人的socket id，然后转发
    // client.on("chat message", function(msg) {
    //   var index = allClients.indexOf(client);
    // });
  });
};
