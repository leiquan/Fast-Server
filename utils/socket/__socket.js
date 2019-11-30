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
      var i = allClients.indexOf(client);
      allClients.splice(i, 1);
    });

    // 自定义处理方法
    client.on("send", data => {
      console.log(data);
    });
  });
};
