// To print out the sum of the numbers entered as command line arguments

var sum = 0

for (var x = 2; x < process.argv.length; x++) {
	sum += +process.argv[x];
}

console.log(sum)

