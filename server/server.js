const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
var socket = io;
app.use(express.static(publicPath));
var color = 'No one has set a color in over a hour';
function update() {
  io.emit('colorr', color)
  };
//function change(newc) {
//  color = newc;
//};

io.on('connection', (socket) => {
  console.log('user in');
  socket.on('disconnect', () => {
    console.log
    ('oh no!');
  });
  socket.on('colorc', (colorm) => {
    color = colorm;
    update();
  });
    socket.on('requp', () => {
      update();
    });
  });
server.listen(port, () => {
  console.log(`Yo! Daniel!  Server is up on port ${port} !`);
});

