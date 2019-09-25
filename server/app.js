const app = require("express")();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    console.log("message: " + msg);
    socket.emit("received message", msg);
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
