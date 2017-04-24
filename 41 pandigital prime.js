/* Problem 41

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.

What is the largest n-digit pandigital prime that exists?

*/

'use strict';

var ML = require('./mathlib.js');

const LIMIT = 7654321;
function main() {
	// var pandigitalPrimes = [];
	for (var i = LIMIT; i > 1; i--) {
	// for (var i = 0; i < LIMIT; i++) {
		if (ML.isPandigital(i, i.toString(10).length)) {
			if (ML.isPrime(i)) {
				return i;
				// pandigitalPrimes.push(i);
			}
		}
	}

	// return pandigitalPrimes[pandigitalPrimes.length - 1];
}

console.time('main');

console.log(main());

console.timeEnd('main');

/*

The trick I learned in 4th grade was that a number is divisible by 3 if and only if the digit sum of the number is divisible by 3. The digit sum is as the name implies the sum of the digits. We can rather easily find the digit sum of pandigital numbers since we know the digits.

1+2+3+4+5+6+7+8+9 = 45

1+2+3+4+5+6+7+8 = 36

1+2+3+4+5+6+7 = 28

1+2+3+4+5+6 = 21

1+2+3+4+5 = 15

1+2+3+4 = 10

1+2+3 = 6

1+2 = 3

From here it is pretty clear that all pandigital numbers except 4 and 7 digit ones are divisible by 3 and thus can’t be primes.  I have chose the lazy method and just lowered the upper limit of the prime generation to 7654321 in the previous example which then gives us a running time of 68ms which gives us a factor 400 in speed up.

*/