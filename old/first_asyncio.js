// Implementing a synchronous filesystem call

var fs = require('fs');
file = process.argv[2];

fs.readFile(file, function (err,data) {
	if (err) {
		return console.log(err);
	}
	var text = data.toString().split('\n');
	console.log(text.length-1);
});


