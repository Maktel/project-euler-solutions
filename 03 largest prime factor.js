/* Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143?

*/

'use strict';

const num = 600851475143;
var factors = [];

for (var i = intSqrt(num); i >= 1; i--) {
	if (num%i === 0) { // i divides num
		factors.push(i);

		if (isPrime(i)) {
			console.log('Largest prime factor of ' + num + ' is ' + i);
			break;
		}
	}
}

console.log(factors);

function isPrime(n) {
	var sqrtN = intSqrt(n);
	for (var i=2; i<=sqrtN; i++) {
		if (n%i === 0) {
			return false;
		}
	}

	return true;
}

function intSqrt(a) {
	a = Math.sqrt(a);
	return a - (a%1);
}