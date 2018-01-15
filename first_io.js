// Implementing a synchronous filesystem call

var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);

var text = file.toString().split('\n');

console.log(text.length-1);
