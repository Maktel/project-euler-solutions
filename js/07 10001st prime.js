/* Problem 7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?

*/

'use strict';

var primes = [];

console.time('main');

for (var i = 2; primes.length != 10001; i++) {
	var isPrime = true;
	let sqrt = Math.sqrt(i);
	for (let a = 0; a < primes.length; a++) {
		if (primes[a] > sqrt) break; // this line is very important for optimalisation
		// don't check on primes larger than sqrt of checked number

		if (i % primes[a] === 0) {
			isPrime = false;
			break;
		}
	}

	if (isPrime) {
		primes.push(i);
	}
}

console.timeEnd('main');


console.log(primes[primes.length - 1]);

