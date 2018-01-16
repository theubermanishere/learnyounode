var net = require('net')

Number.prototype.pad = function(size) {
  var s = String(this);
  while (s.length < (size || 2)) {s = "0" + s;}
  return s;
}

var server = net.createServer(function (socket) {
	let time = new Date()
	currentTime = time.getFullYear().toString() + '-' + (time.getMonth()+1).pad(2).toString() + '-' + time.getDate().pad(2).toString() + ' ' + time.getHours().pad(2).toString() + ":" + time.getMinutes().pad(2).toString()
	socket.write(currentTime);
	socket.end('\n');
})

server.listen(process.argv[2])
