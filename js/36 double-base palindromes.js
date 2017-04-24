/* Problem 36

The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)

*/

'use strict';

const LIMIT = 1000000;

function main(LIMIT) {
	var pals = [];

	for (let i = 1; i < LIMIT; i++) {
		if (isPalindromic(i.toString(10)) && isPalindromic(i.toString(2))) pals.push(i);
	}

	var sum = 0;
	for (let n of pals) sum += n;

	console.log(pals);
	return sum;
}


function isPalindromic(s) {
	/* version with comparing char by char, first with last, second with next to last, and so on */
	var len = s.length;
	for (let i = 0; i <= len / 2; i++) {
		if (s[i] !== s[(len - 1) - i]) return false;
	}

	return true;


	/* version with reversed string */
	// var reversedString = s.split('').reverse().join(''); // split into array, reverse array, join
	// return s === reversedString;
}


console.time('main');

console.log(main(LIMIT));

console.timeEnd('main');