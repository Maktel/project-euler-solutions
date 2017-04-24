/*

Problem 50

The prime 41, can be written as the sum of six consecutive primes:

41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.

The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

Which prime, below one-million, can be written as the sum of the most consecutive primes?

*/

'use strict';

var ML = require('./mathlib.js');

const LIMIT = 1000000;
const sieve = ML.sieve(LIMIT);

function main() {
	var primes = [];
	for (let i = 0; i < sieve.length; i++) if (sieve[i]) primes.push(i);


	var res = {
		num: 953,
		len: 21
	};

	const primesLength = primes.length;
	for (let i = 0; i < primesLength; i++) {
		let target = primes[i];

		for (let j = 0; j < i; j++) {
			let sum = 0, len = 0, m = 0;

			while (sum < target) {
				// ++m and m++ are different ;d
				if (++m >= primesLength - j) break;
				sum += primes[j + m];
				len++;
			}

			if (sum === target && len >= res.len) {
				res.num = sum;
				res.len = len;
			}

			// solution longer than already found maximum for this prime is no 
			// longer possible
			if (len < res.len) break;
		}
	}

	return res.num;
}


function isPrime(n) {
	return sieve[n];
}


console.time('main');

console.log(main());

console.timeEnd('main');