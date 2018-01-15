var http = require('http')
var async = require('async')


if (process.argv.length > 2) {
	for ( var i = 2; i < process.argv.length; i++) {
		http.get(process.argv[i], function (res) {
			counter += 1
			text = ""
			res.setEncoding('utf8')
			res.on('data', function (data) {
				text += data
			})
			res.on('end', function () {
				papyrus[i] = text
				counter -= 1
			})
			res.on('error', console.error)
		}).on('error', console.error);
	}
}

var urls = process.argv.slice(2,);

async.eachSeries(urls, function(data, callback) {


})
