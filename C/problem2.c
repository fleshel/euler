#include <stdio.h>
#include <stdlib.h>

#define N_MAX 4000000

int main()
{

	int sum = 0;
	int a = 0;
	int b = 1;

	int c = a + b;

	while(c < 4000000)
	{
		if(c % 2 == 0)
		{
			sum += c;
		}
		c = a + b;
		a = b;
		b = c;
	}

	printf("\nSum is %d\n\n", sum);

	return 0;
}
