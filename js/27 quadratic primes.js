/* Problem 27

Euler discovered the remarkable quadratic formula:

n^2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤390≤n≤39. However, when n=40,402+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,412+41+41 is clearly divisible by 41.

The incredible formula n2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. The product of the coefficients, −79 and 1601, is −126479.

Considering quadratics of the form:

n^2+an+b, where |a|<1000 and |b|≤1000

where |n| is the modulus/absolute value of n
e.g. |11|=11 and |−4|=4
Find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.

*/

'use strict';

var ML = require('./mathlib.js');

// returns value of a formula for specific n
function f(n, a, b) {
	return n * n + a * n + b;
}

// returns number of primes in a series (largest n, for which value of a function is not prime)
function primesInSeries(a, b) {
	for (let n = 0; ; n++) {
		if (!ML.isPrime(f(n, a, b))) return n;
	}
}

const LIMITS = {
	a: 1000,
	b: 1000,
}

function main(LIMITS) {
	var max = -1,
	    det = { a: 0, 
			    b: 0 };

	for (let a = -1 * LIMITS.a; a < LIMITS.a; a++) {
		for (let b = -1 * LIMITS.b; b < LIMITS.b; b++) {
			let _t = primesInSeries(a, b);
			if (_t > max) {
				max = _t;
				det.a = a;
				det.b = b;
			}
		}
	}

	return det.a * det.b;
}

console.time('main');

console.log(main(LIMITS));

console.timeEnd('main');

/*
	n^2 - n + 41
	0 - 0 + 41 = 41
	1 - 1 + 41 = 41
	4 - 2 + 41 = 43

	n^2 + n + 41
	0 + 0 + 41 = 41
	1 + 1 + 41 = 43
 */