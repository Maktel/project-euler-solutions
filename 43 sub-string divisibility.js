/*

Problem 43

The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:

d2d3d4=406 is divisible by 2
d3d4d5=063 is divisible by 3
d4d5d6=635 is divisible by 5
d5d6d7=357 is divisible by 7
d6d7d8=572 is divisible by 11
d7d8d9=728 is divisible by 13
d8d9d10=289 is divisible by 17
Find the sum of all 0 to 9 pandigital numbers with this property.

*/

'use strict';

var ML = require('./mathlib.js');


function main() {
	var perm = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

	var res = [];
	while (ML.nextPermutation(perm)) {
		if (fragmentarilyDivisible(perm)) res.push(parseInt(perm.join(''), 10));
	}

	var sum = 0;
	for (let n of res) sum += n;


	console.log(res);
	return sum;
}


const divisors = [ 2, 3, 5, 7, 11, 13, 17 ];

function fragmentarilyDivisible(a) {
	for (let i = 1; i < 8; i++) {
		let f = 100 * a[i] + 10 * a[i + 1] + a[i + 2]; // exec 250 ms
		// let f = Number('' + a[i] + a[i + 1] + a[i + 2]); // exec 950 ms
		// let f = parseInt('' + a[i] + a[i + 1] + a[i + 2]); // exec 1200 ms
		if (f % divisors[i - 1] !== 0) return false;
	}

	return true;
}

console.time('main');

console.log(main());

console.timeEnd('main');