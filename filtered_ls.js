// filter and display files in the current directory by extension

var fs = require('fs');

fs.readdir(process.argv[2], function(err,data) {
	if (err) {
		return	console.log(err)
	}
	files = []
	for (var i = 0; i < data.length; i++) {
		var file = data[i].split('.');
		if ( file[1] == process.argv[3] ) {
			console.log(data[i]);
		}
	}
});
