#include <stdio.h>
#include <stdlib.h>

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

#define MAX 1000

int divides(int n);

int main(int argc, char *argv[])
{
	int sum = 0;

	int a = 0;

	for(a = 0; a < MAX; a++)
	{
		sum += divides(a);
	}

	printf("\nSum under %d: %d\n\n", MAX, sum);

	return 0;
}

int divides(int n)
{
	if(
		(n % 3 == 0) ||
		(n % 5 == 0)
	){
		return n;
	}
	return 0;
}
