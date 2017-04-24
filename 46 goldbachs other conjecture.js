/*

Problem 46

It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

*/

'use strict';

var ML = require('./mathlib.js');

function main() {
	const limit = 6000;
	var sieve = ML.sieve(limit);

	for (let i = 2; i < limit; i++) { // should go until it finds a match
		// limited because of a sieve
		// for all around solution, use standard prime generation, not sieve
		
		if (i % 2 && !sieve[i]) { // loop through odd composites
			let canBeRepresented = false;
			outer:
			for (let j = 3; j < i - 1; j++) if (sieve[j]) { // loop through primes
				for (let m = 1; j + 2 * m * m <= i; m++) { // check every square
					if (j + 2 * m * m === i) {
						canBeRepresented = true;
						break outer; // don't look for mutliple solutions
					}
				}
			}

			if (!canBeRepresented) return i;
		}
	}
}

console.time('main');

console.log(main());

console.timeEnd('main');