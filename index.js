const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
var five = require('johnny-five');


http.listen(port, () => {
  console.log(`Initialized http://localhost:${port}/`);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

new five.Board().on('ready', function(){

    let fsrOne = new five.Sensor({
      pin: "A3"
    });

    fsrOne.scale([0, 1023]).on("data", function(){
        currentVal = this.scaled;
        io.emit('weight', currentVal);
    });
});

