/*

Problem 47

The first two consecutive numbers to have two distinct prime factors are:

14 = 2 × 7
15 = 3 × 5

The first three consecutive numbers to have three distinct prime factors are:

644 = 2² × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19.

Find the first four consecutive integers to have four distinct prime factors. What is the first of these numbers?

*/

'use strict';

var ML = require('./mathlib.js');

function main() {
	var numbers = [];
	var consec = 0; 

	for (var i = 2; consec < 4; i++) {
		numbers[i] = countDistinctFactors(ML.primeFactorise(i));

		// if (i - 3 >= 2) if (numbers[i] === 4 && numbers[i - 1] === 4 
		// 	&& numbers[i - 2] === 4 && numbers[i - 3] === 4) return i - 3;
		
		if (numbers[i] === 4) consec++;
		else consec = 0;
	}

	return (i - 4);
}


function countDistinctFactors(arr) {
	var set = new Set();

	for (let n of arr) set.add(n);

	return set.size;
}

console.time('main');

console.log('Takes circa 2000 ms');
console.log(main()); // 134043
// can be 2 times faster when using sets directly, without arrays

console.timeEnd('main');