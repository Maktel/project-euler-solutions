// alt ES6 syntax, doesn't work yet in node:
/*
	export const PI = Math.PI;
	export function foo(bar) {
		return bar;
	}

	// in main files
	import { PI, foo } from 'mathlib.js';
 */

/* 
console.time('sieve');

const sieveBound = 1;
const sieve = ML.sieve(sieveBound);

console.timeEnd('sieve');

function isPrime(n) {
	return (n <= sieveBound ? sieve[n] : ML.isPrime(n));
}
*/

	/* FUNCTION DEFINITIONS */

var getDivisors = function(n, arr) {
	'use strict';
	
	if (typeof n === 'undefined') throw 'n is required';
	if (typeof arr === 'undefined') arr = [];

	var sum = 1;

	var sqrt = Math.trunc(Math.sqrt(n));
	for (let i = 2; i <= sqrt; i++) {
		if (n % i === 0) {
			arr.push(i, n / i);
			sum += i + n / i;
		}
	}
	if (sqrt * sqrt === n) { // sqrt has been doubled
		arr.pop(); 
		sum -= sqrt;
	}

	return sum;
}


var isPrime = function(n) {
	'use strict';

	if (n < 2) return false;

	var sqrt = Math.trunc(Math.sqrt(n));
	if (n % 2 === 0) return false; // even
	for (let i = 3; i <= sqrt; i += 2) { // every odd
		if (n % i === 0) {
			return false;
		}
	}
	
	return true;
}


var sieve = function(limit) {
	'use strict';

	// Eratosthenes algorithm to find all primes under limit
	var upperLimit = Math.sqrt(limit);
	var array = new Int8Array(limit + 1);
	array[0] = false;
	array[1] = false;

	array.fill(true, 2);

	// Remove multiples of primes starting from 2, 3, 5,...
	for (let i = 2; i <= upperLimit; i++) {
		if (array[i]) {
			for (let j = i * i; j <= limit; j += i) {
				array[j] = false;
			}
		}
	}

	return array;
}


var factorial = function(n) {
	'use strict';
	var res = 1;
	for (let i = 2; i <= n; i++) {
		res *= i;
	}

	return res;
}


var getDigits = function(v) {
	switch (typeof(v)) {
		case 'string':
			return s.split('').reverse().map(p => Number(p));

		case 'number':
			var digits = []; 

			while (v > 0) {
				digits.push(v % 10);
				v = Math.floor(v / 10);
			}

			return digits;

		default:
			return ;
	}
}


// uses string searching
var isPandigital = function(n, r) {
	'use strict';
	n += '';

	if (!r) r = 9;
	for (let i = 1; i <= r; i++) {
		if (n.indexOf(i) === -1) return false;
	}

	return true;
}

// A Discipline of programming, E. Dijkstra, p. 71
var nextPermutation = function(a) {
	'use strict';

	var n = a.length, i, j;
	for (i = n - 2; ; i--) { // sets i position
		if (i < 0)
			return false;
		if (a[i] < a[i + 1])
			break;
	}

	for (j = 1; i + j < n - j; j++) { // swaps some values
		let tp = a[i + j];
		a[i + j] = a[n - j];
		a[n - j] = tp;
	}

	for (j = i + 1; a[j] <= a[i]; j++); // position set for j
	var tp = a[i]; // swap
	a[i] = a[j];
	a[j] = tp;

	return true;
}


var primeFactorise = function(n) {
	'use strict';
	var factors = [];

	outer:
	while (n > 1) {
		if (n % 2 === 0) {
			factors.push(2);
			n /= 2;
			continue;
		}

		var sqrt = Math.sqrt(n);
		for (let i = 3; i <= sqrt; i += 2) {
			if (n % i === 0) {
				factors.push(i);
				n /= i;
				continue outer;
			}
		}

		if (n !== 1) factors.push(n);
		break;
	}

	return factors;
}


	/* MODULES SECTION */

module.exports = {
	// n required, arr optional
	// does not push 1 neither n to arr
	getDivisors: getDivisors,

	// returns boolean
	// negative numbers always return false
	isPrime: isPrime,

	// returns an array of size limit + 1
	// cell is true if number is prime, false otherwise
	sieve: sieve,

	factorial: factorial,

	// returns array of digits
	// element at index i corresponds to element times 10 to the power of i
	getDigits: getDigits,

	// returns boolean
	// checks if first argument is 1 to second-argument pandigital or not
	// defaults to 1 to 9 if no range given
	isPandigital: isPandigital,

	// permutes lexicographically passed array
	// returns false if permutation is no longer possible, true if permuted
	nextPermutation: nextPermutation,

	// returns array with prime factors of a parameter
	primeFactorise: primeFactorise,

	sleep: function(n) {
		'use strict';
		for (let i = 0; i < 5000000 * n; i++) ;
	}
}