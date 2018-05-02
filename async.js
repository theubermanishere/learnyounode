var fs = require('fs')
var path = require('path')

var ext = '.' + process.argv[3];

fs.readdir( process.argv[2], (err, list) => {
	if (err) {
		return console.log(err);
	}
	var len = list.length;
	for(var i=0; i < len; i++) {
		if (path.extname(list[i]) == ext) {
			console.log(list[i]);
		}
	}

})

