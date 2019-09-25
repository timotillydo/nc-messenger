const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const insertMessage = require("./models/message-model");

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    console.log("message from fe: " + msg);
    insertMessage(msg)
      .then(storedMsg => socket.emit("received message", storedMsg))
      .catch(err =>
        socket.emit("message error", { errMsg: "something went wrong", err })
      );
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
