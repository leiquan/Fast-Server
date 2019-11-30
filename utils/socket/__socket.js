let socket = require("socket.io");

module.exports = function(server) {
  let io = socket(server);

  io.on("connection", client => {
    console.log("Web Socket新增1个连接");

    client.on("storeClientInfo", function(data) {
      var clientInfo = new Object();
      clientInfo.customId = data.customId;
      clientInfo.clientId = socket.id;
      console.log(clientInfo);
    });

    client.on("send", data => {
      console.log(data);
    });

    client.on("disconnect", client => {
      console.log("Web Socket断开1个连接");
    });
  });
};
