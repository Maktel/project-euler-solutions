/*

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.

*/

'use strict';

function main() {
	var res = [];
	const LIMIT = getLimit();
	for (let i = 2; i < LIMIT; i++) {
		if (sumOfDigits(i) === i) res.push(i);

		// let sum = sumOfDigits(i);
		// if (sum === i) res.push(i);
		// console.log(i, sum);
	}

	var sum = 0;
	for (let e of res) sum += e;
	return sum;
}

console.time('main');

console.log(main()); // 443839 for 5th power

console.timeEnd('main');


function sumOfDigits(n) {
	var sum = 0;
	for ( ; n > 0; n = Math.trunc(n / 10)) {
		sum += digitTransformation(n % 10);
	}

	return sum;
}


// raises to *th power
function digitTransformation(n) {
	return Math.pow(n, 5);
}


// returns power of 10 for which sum of digits cannot exceed the number itself
function getLimit() {
	var max = 9;
	for (var i = 1; sumOfDigits(max) >= Math.pow(10, i); i++, max *= 10, max += 9) ;// console.log(sumOfDigits(max), Math.pow(10, i));

	return Math.pow(10, i);
}