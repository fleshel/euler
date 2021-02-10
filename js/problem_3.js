let isPrime = n => {
	for(let i = 2; i < n; i++)
	{
		if(n % i == 0) return false;
		//trial division... not the best way
	}
	return true;
}

let divides = (a, b) => (a % b == 0);

const prime_factorization = n => {
	let p = []; //p will be the terms

	//we only need to check for prime factors below floor(sqrt(n))

	for(var i = 2; i < Math.sqrt(n); i++)
	{
		if(isPrime(i) && divides(n, i)) {
			while(divides(n, i)) {
				console.log('i = ' + i);
				n /= i;
				p.push(i);
				console.log('n = ' + n);
			}
		}
	}
	p.push(n); //n will be the remainder after dividing off everything else
	return p;
}

function main() {
	console.log(prime_factorization(1232354989847));
	//should output [ 71, 839, 1471, 6857 ]
	//6857 is correct ;)
}
main();
