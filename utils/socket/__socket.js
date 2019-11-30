let io = require("socket.io");

// 用数组保存全部socket会话，以供使用
var allClients = [];

// 此函数不能被多次调用，否则会话数量将出现错误
module.exports = function(server) {
  let socket = io(server);

  // 通用处理，管理会话池
  socket.on("connection", client => {
    allClients.push(client);

    // 需要建立用户的id与会话id的联系，后续需要使用
    client.emit("id", client.id);

    console.log(
      "Web Socket新增1个连接：",
      client.id,
      "，目前连接数量：",
      allClients.length
    );

    client.on("disconnect", reason => {
      var index = allClients.indexOf(client);
      allClients.splice(index, 1);
      console.log(
        "Web Socket断开1个连接：",
        client.id,
        "，理由：",
        reason,
        "，目前连接数量：",
        allClients.length
      );
    });

    // 私发消息，这里要一对一的发，确定接收人的socket id，然后转发
    client.on("send", function(data) {
      console.log(data);

      // 这里的id，是用户的id，要和会话池建立一对一联系
      // {
      //   to_id,
      //   msg
      // }
      var toId = data.to_id;

      // var index = allClients.indexOf(client);

      let toSocket = allClients[1];
      // for(let i = 0; i < allClients.length; i++){
      //   if(allClients[i].id == toId){
      //     toSocket = allClients[i];
      //   }
      // }

      toSocket.emit("message", "test");
    });
  });
};
