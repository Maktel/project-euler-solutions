/*

Problem 48

The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.

Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

*/

'use strict';

var bigInt = require('big-integer');

function bruteforce() {
	var sum = bigInt(0);

	for (let i = 1; i <= 1000; i++) {
		let n = bigInt(i).pow(i);
		
		sum = sum.add(n);
	}

	return sum.toString(10).substr(-10);
}

console.time('bruteforce');

console.log(bruteforce());

console.timeEnd('bruteforce');


/* not mine, but just wanted to have it */
// I didn't realise we could use built-in variables for calculation

function modulo() {
	var result = 0;
	var modulo = 10000000000;
	
	for (let i = 1; i <= 1000; i++) {
		let temp = i;
		for (let j = 1; j < i; j++) {
			temp *= i;
			temp %= modulo;
		}
	
		result += temp;
		result %= modulo;
	}

	return result;
}

console.time('modulo');

console.log(modulo());

console.timeEnd('modulo');