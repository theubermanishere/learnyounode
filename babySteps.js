var fs = require('fs')

file = fs.readFileSync(process.argv[2])

text = file.toString().split('\n').length - 1

console.log(text)
