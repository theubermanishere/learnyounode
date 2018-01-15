var http = require('http')

http.get(process.argv[2], function (res) {
	text = ""
	res.setEncoding('utf8')
	res.on('data', function (data) {
		text += data
	})
	res.on('end', function () {
	console.log(text.length)
	console.log(text)
	})
	res.on('error', console.error)
}).on('error', console.error);
