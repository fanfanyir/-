var app = require("http").createServer();
var io = require("socket.io")(app);
var PORT = 3000;

var clientCount = 0

app.listen(PORT);

io.on('connection',function(socket) {
    clientCount ++
    socket.nickname = 'user' + clientCount  //socket.emit是给socket代表的客户端发送消息
    io.emit('enter', socket.nickname + 'comes in')  //io.emit是进行广播

    socket.on('message',function (str) {
        io.emit('message', socket.nickname + 'says:' + str)
    })

    socket.on('disconnect', function () {
        io.emit('leave', socket.nickname + 'left')
    })
})

console.log("websocket server listening 0n port" + PORT)