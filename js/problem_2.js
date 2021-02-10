//one-liner to calculate parity
let isEven = n => n % 2 == 0;

function main()
{
	var sum = 0;

	let a = new Array();
	//create a new array to store the n fib numbers
	a[0] = 0;
	a[1] = 1;
	a[2] = 1;

	let i = 2;
	while(a[i-1] < 4 * 1000000) {
		a[i] = a[i-1] + a[i-2];
		sum += isEven(a[i]) ? a[i] : 0;
		i += 1;
	}

	console.log(sum);

	//should print 4613732, the correct answer :)
}

main();
