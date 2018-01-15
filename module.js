// An exportable function to return a filtered file list

var fs = require('fs');

module.exports = function (dir, ext, callback) {
	directory = fs.readdir(dir, function(err, data) {
		if (err) {
			return callback(err, null)
		}
		else {
		files = []
		for (var i = 0; i < data.length; i++) {
			var file = data[i].split('.');
			if ( file[1] == ext ) {
				files.push(data[i]);
			}
		}
		return callback(null, files)
		}
	
	});
};
