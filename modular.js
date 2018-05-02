var fs = require('fs')
var path = require('path')

module.exports = function (dir, ext, call) {
	ext = "." + ext
	fs.readdir(dir, (err, data) => {
		if (err) return call(err)
		var len = data.length
		var list = []
		for(var i = 0; i < len; i++) {
			if (path.extname(data[i]) == ext) {
				list.push(data[i]);
			}
		}
		call(null, list);
	})
}
