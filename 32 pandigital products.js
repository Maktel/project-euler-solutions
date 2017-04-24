/*

Problem 32

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.

Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.

*/

'use strict';

function arePandigital(a, b, c) {
	var s = '' + a + b + c;

	return (s.length === 9 ? isPandigital(s) : false);
}

function isPandigital(n) {
	n += '';

	for (let i = 1; i <= 9; i++) {
		if (n.indexOf(i) === -1) return false;
	}

	return true;
}

function main() {
	var arr = [];

	for (let i = 1; i < 9999; i++) {
		for (let j = 1; j < 999; j++) {
			var s = '' + i + j + (i *j);

			if (s.length > 9) break;
			if (isPandigital(s) && arr.indexOf(i * j) === -1) arr.push(i * j); 
		}
	}

	var sum = 0;
	for (let n of arr) sum += n;

	return sum;
}

console.time('main');

console.log(main());

console.timeEnd('main');

/* Project Nayuki solution */
// as I tested it, it is much slower than my solution, due to inoptimal 
// transformation to JS, but also because of bigger number range covered 
// (20000 comparisons more)

function _main() {
	var sum = 0;

	for (let i = 1; i < 10000; i++) {
		if (_hasPandigitalProduct(i)) sum += i;
	}

	return sum;
}

function _hasPandigitalProduct(n) {
	for (let i = 1; i <= n; i++) {
		if (n % i === 0 && _isPandigital('' + n + i + n/i)) return true;
	}

	return false;
}

function _isPandigital(s) {
	if (s.length !== 9) return false;

	// toCharArray()
	var charArray = [];
	for (let i = 0; i < s.length; i++) charArray.push(s.charAt(i));

	charArray.sort();

	return charArray.join('') === '123456789';
}

console.time('_main');

console.log(_main());

console.timeEnd('_main');