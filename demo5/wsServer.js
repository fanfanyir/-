var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(3000);

io.on('connection',function(socket) {
    socket.emit('news',{ hello:'world' }); //发送数据  直接就可以发送对象
    socket.on('my other event',function(data) {//可以on任何东西
        console .log(data)
    });
});