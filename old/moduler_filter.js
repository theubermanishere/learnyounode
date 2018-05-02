// filter and display files in the current directory by extension

var filter = require('./module')


filter(process.argv[2], process.argv[3], function (err,data) {
	if (err) {
		return console.log(error);
	}
	for(var i = 0; i < data.length; i++) {

		console.log(data[i]);
	}
});
