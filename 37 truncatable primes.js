/* Problem 37

The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.

*/

'use strict';

var ML = require('./mathlib.js');
const sieveBound = 2000000;
const sieve = ML.sieve(sieveBound);


function main() {
	var res = [];

	// could get rid of cnt variable and use res.length, but performance
	for (let n = 8, cnt = 0; cnt < 11; n++) {
		if (isPrime(n)) {
			if (isRightTruncable(n) && isLeftTruncable(n)) {
				res.push(n);
				cnt++;  
			}	
		}
	}

	var sum = 0;
	for (let e of res) sum += e;

	console.log(res);

	return sum;
}


function isRightTruncable(n) {
	n = Math.trunc(n / 10); // allows if and trunc swap without false positives	
	while (n > 0) {
		if (!isPrime(n)) return false;
		n = Math.trunc(n / 10);
	}

	// console.log('isRightTrunc: ' + arguments[0]);

	return true;
}


function isLeftTruncable(n) {
	n = Number(n.toString(10).substring(1));
	while (n > 0) {
		if (!isPrime(n)) return false;
		n = Number(n.toString(10).substring(1));
	}

	// console.log('isLeftTrunc: ' + arguments[0]);

	return true;
}


function isPrime(n) {
	return (n <= sieveBound ? sieve[n] : isPrime(n));
}


console.time('main');

console.log('Answer: ' + main()); // 748317

console.timeEnd('main');