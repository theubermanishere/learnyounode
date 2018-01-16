var http = require('http')
var url = require('url')

var server = http.createServer( function callback(req,res) {
	query = url.parse(req.url, true)
	res.writeHead(200, {'Content-Type': 'application/json'})
	console.log(query)
	if (query.pathname == '/api/parsetime') {
	var time = new Date(query.query.iso)
	var final = {"hour": time.getHours(), "minute": time.getMinutes(), "second": time.getSeconds()}
	console.log(final)
	res.write(JSON.stringify(final))
	res.end()
	}
	if (query.pathname == '/api/unixtime') {
	var time = new Date(query.query.iso)
	var final = {'unixtime': time.getTime()}
	console.log(final)
	res.write(JSON.stringify(final))
	res.end()
	}
});

server.listen(process.argv[2])
