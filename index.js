var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){

});

io.on('connection', function(socket){

    io.emit('ibrahim');
    socket.on('samed',function(data){
      io.emit('geridondum');
    });
        socket.on('deleteobjectUnity',function(data){
        console.log(data);
       io.sockets.emit('deleteobjectApi', data);
    });
    socket.on('deletedobjectApi',function(data){
       console.log(data); 
       io.sockets.emit('deletedobjectUnity',data);
    });
});

http.listen(process.env.PORT || 1337, function(){
  console.log('listening on *:3000');
});
