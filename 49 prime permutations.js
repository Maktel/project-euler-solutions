/*

Problem 49

The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.

There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.

What 12-digit number do you form by concatenating the three terms in this sequence?

*/

'use strict';

var ML = require('./mathlib.js');

const sieve = ML.sieve(10000);

function main() {
	var trios = [];

	// hard brute force, takes crica 12 sec
	/*for (let i = 1000; i < 10000; i++) {
		if (isPrime(i)) for (let j = 1000; j < i; j++) {
			if (isPrime(j)) for (let m = 1000; m < j; m++) {
				if (i - j === j - m) {
					// switching line above and below grants 40% exec speed boost
					if (isPrime(m)) {
						if (arePermutations(
							ML.getDigits(i), ML.getDigits(j), ML.getDigits(m)
						)) {
							trios.push([m, j, i]);
						}
					}
				}
			}
		}
	}*/

	for (let i = 1000; i < 10000; i++) {
		if (isPrime(i)) {
			let perm = i.toString(10).split('').map(p => Number(p));
			// remember: don't be an idiot. Check what you are using before you
			// actually use it. ML.getDigits returns number split into digits,
			// but in reverse. So it won't work for nextPermutation

			while (ML.nextPermutation(perm)) {
				let n = parseInt(perm.join(''));
				
				if (isPrime(n)) {
					let m = n + Math.abs(n - i);
					if (isPermutation(perm.slice(), ML.getDigits(m)) && isPrime(m)) {
						trios.push([i, n, m]);
					}
				}
			}
		}
	}

	return trios[1].join('');
}


function isPrime(n) {
	return sieve[n];
}


function arePermutations(a1, a2, a3) {
	if (a1.length !== a2.length) return false;
	a1.sort();
	a2.sort();

	if (a3) {
		if (a1.length !== a3.length) return false;
		a3.sort();
	}

	for (let i = 0; i < a1.length; i++) {
		if (a1[i] !== a2[i]) return false;
		if (a1[i] !== a3[i]) return false;
	}


	return true;


	/* alt
	var s1 = a1.sort().join('');
	var s2 = a2.sort().join('');
	var s3 = a3.sort().join('');
	return ((s1 === s2) && (s1 === s3));*/
}


function isPermutation(a1, a2) {
	return a1.sort().join('') === a2.sort().join('');
}


console.time('main');

console.log(main());

// var p = ML.getDigits(1031);
// while (ML.nextPermutation(p)) console.log(p);

console.timeEnd('main');