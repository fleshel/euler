function isMultiple(n) {
	return n % 3 == 0 || n % 5 == 0;
}

function main()
{
	var sum = 0;

	for(let i = 0; i < 1000; i++)
	{
		isMultiple(i) ? sum += i : 0;
		//add i to the sum if it's a multiple
	}

	console.log(sum);
	//prints 233168 to console, the correct answer :)
}

main();
