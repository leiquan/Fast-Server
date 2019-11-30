let io = require("socket.io");

// 用数组保存全部socket会话，以供使用
var allClients = [];

module.exports = function (server) {
  let socket = io(server);

  socket.on("connection", client => {
    allClients.push(client);

    console.log(
      "Web Socket新增1个连接：",
      client.id,
      "，目前连接数量：",
      allClients.length
    );

    client.on("send", data => {
      console.log(data);
    });

    client.on("disconnect", reason => {
      var i = allClients.indexOf(client);
      allClients.splice(i, 1);
      console.log(
        "Web Socket断开1个连接：",
        client.id,
        "，理由：",
        reason,
        "，目前连接数量：",
        allClients.length
      );
    });
  });

  return {
    socket,
    allClients
  }

};
