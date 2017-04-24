/* Problem 10

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.

*/

'use strict';

var upperBound = 2000000;

/* v1 */
// solution slow
// 2 000 000 takes approx. 25 seconds
/*

var primes = [];
var sum = 0;

console.time('v1');
for (let i=2; i<upperBound; i++) {
	let isPrime = true;
	let sqrt = Math.sqrt(i);
	let len = primes.length;
	for (let a=0; a<len; a++) {
		if (primes[a] > sqrt) break;
		if (i%primes[a] === 0) {
			isPrime = false;
		}
	}

	if (isPrime) {
		primes.push(i);
		sum += i;
	}
}
console.timeEnd('v1');

console.log(sum);
*/

/* v2 */
// almost two times faster than v1, ~13s
/*
var sum = 0;

console.time('v2');
for (let i=2; i<upperBound; i++) {
	if (isPrime(i)) {
		sum += i;
	}
}
console.timeEnd('v2');

console.log(sum);

function isPrime(n) {
	let sqrt = Math.sqrt(n);
	for (let i=2; i<=sqrt; i++) {
		if (n%i === 0) {
			return false;
		}
	}

	return true;
}
*/

/* v3 */
// half a second

var ML = require('./mathlib.js');

function main() {
	const sieve = ML.sieve(upperBound);
	var sum = 0;
	for (let i = 2; i < upperBound; i++) {
		if (sieve[i]) sum += i;  
	}

	return sum;
}

console.time('main');

console.log(main());

console.timeEnd('main');