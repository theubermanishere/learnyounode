var filter = require('./modular.js')

filter(process.argv[2], process.argv[3], function(err, data) {
	var len = data.length
	for(var i=0; i < len; i++) {
		console.log(data[i])
		}

	});
