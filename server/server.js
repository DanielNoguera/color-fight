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
var color = 'No one has set a color for a long time, make sure you let everyone know what the best color is!';
function update() {
  io.emit('colorr', color)
  };
//function change(newc) {
//  color = newc;
//};

io.on('connection', (socket) => {
  console.log('user in');
  socket.on('disconnect', () => {
    console.log('oh no!');
  });
  socket.on('colorc', (colorm) => {
    color = colorm;
    console.log('ok now');
  });
  setInterval(update, 1000
  );

});
server.listen(port, () => {
  console.log(`Yo! Daniel!  Server is up on port ${port} !`);
});
//to do a complete post, make a .gitignore file
//put in it node_modules/
//build a port variable equal to process.env.PORT || make the server.listen to port first
//go to package.json in scripts make a start equal to node and then down from the folder like server/server.js or such
//in package.json make engines and set it equal to your node version.  Find this with node --version
//make a new repo
//git status
//git add .
//git commit -m 'Init commit'
//git remote add origin https://github.com/DanielNoguera/color-fight.git
//git push -u origin master
//heroku create
//git push heroku master
//heroku git:remote -a aqueous-cliffs-48607
