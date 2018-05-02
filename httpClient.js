var http = require('http')

http.get(process.argv[2], (res) => {
	res.setEncoding('utf8')
	d = ""
	res.on('data', (data) => { d = d + data })
	res.on('end', () => {
		console.log(d.length)
		console.log(d)
	})


})
