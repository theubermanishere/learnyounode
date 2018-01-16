var http = require('http')
var async = require('async')

var papyrus = new Array(3)
var counter = 0

for ( let i = 2; i < process.argv.length; i++) {
	http.get(process.argv[i], function (res) {
		let text = ""
		res.setEncoding('utf8')
		res.on('data', function (data) {
			text += data
		})
		res.on('end', function () {
			counter += 1
			papyrus[i-2] = text
			if (counter == 3) {
				for ( var b = 0; b < 3; b++) {
					console.log(papyrus[b])
				}
			}
		})
		res.on('error', console.error)
		
	}).on('error', console.error);
}
