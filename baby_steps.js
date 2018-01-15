// To print out the sum of the numbers entered as command line arguments

args = process.argv
i = args.length
sum = 0
for (x=2 ;x<i;x++) {
	sum += +args[x];
}

console.log(sum)

