/*

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.

There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

How many circular primes are there below one million?

*/

'use strict';

var ML = require('./mathlib.js');
const LIMIT = 1000000;
const sieve = ML.sieve(LIMIT);

function main(LIMIT) {
	var circPrimes = [ 2, 5 ];

	for (let i = 2; i < LIMIT; i++) {
		if (isPrime(i)) {
			if (isCircular(i)) {
				circPrimes.push(i);
			}
		}
	}

	console.log(circPrimes);

	return circPrimes.length;
}

const EXCL = [0, 2, 4, 5, 6, 8];
function isCircular(n) {
	var s = n.toString(10);
	
	for (let e of EXCL) {
		if (s.indexOf(e) !== -1) return false;
	}

	// slower version of above
	// var digits = s.split('').map(Number);
	// for (let d of digits) {
	// 	if (EXCL.indexOf(d) !== -1) return false;
	// }

	var len = s.length;
	for (let i = 1; i < len; i++) {
		let p = s.slice(i) + s.substr(0, i);
		// console.log(p);
		if (!isPrime(p)) return false;
	}

	return true;
}

function isPrime(n) {
	return sieve[n];
}

console.time('main');

console.log('Answer: %d', main(LIMIT));

console.timeEnd('main');