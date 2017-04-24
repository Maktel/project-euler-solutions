/* Problem 34

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

Find the sum of all numbers which are equal to the sum of the factorial of their digits.

Note: as 1! = 1 and 2! = 2 are not sums they are not included.

*/

'use strict';

var ML = require('./mathlib.js');

var fact = []; // for sped up digit factorials summation

function main() {
	var arr = [];
	const UPPER_BOUND = 7 * ML.factorial(9); // solution with more than 8 digits is impossible

	for (let i = 0; i <= 9; i++) {
		fact.push(ML.factorial(i));
	}

	for (let i = 3; i < UPPER_BOUND; i++) {
		if (isEqualToSum(i)) arr.push(i);
	}

	var sum = 0;
	for (let e of arr) sum += e; 
	
	return sum;
}


function sumDigitFactorials(n) {
	var digits = ML.getDigits(n);
	var sum = 0;
	// for (let d of digits) sum += ML.factorial(d);
	for (let d of digits) sum += fact[d];

	return sum;
}


function isEqualToSum(n) {
	return (sumDigitFactorials(n) === n ? true : false);
}


console.time('main');

console.log(main());

console.timeEnd('main');