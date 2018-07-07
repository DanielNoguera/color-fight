var socket = io();
socket.on('connect', function () {
  console.log('Connected to server my bro');
    });
socket.on('disconnect', function () {
  console.log('disconnected from server my bro!');
});

socket.on('colorr', function (tcc) {
  document.getElementById("truecolor").innerHTML = tcc;
});
function change(colorll) {
  socket.emit('colorc', colorll);
  console.log('ok');
}
