var http = require('http')
var fs = require('fs')

server = http.createServer( function callback(req,res) {
	var file = fs.createReadStream(process.argv[3])
	file.pipe(res)

});

server.listen(process.argv[2])
