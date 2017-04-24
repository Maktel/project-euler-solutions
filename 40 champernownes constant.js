/* Problem 40

An irrational decimal fraction is created by concatenating the positive integers:

0.123456789101112131415161718192021...

It can be seen that the 12th digit of the fractional part is 1.

If dn represents the nth digit of the fractional part, find the value of the following expression.

d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000

*/

'use strict';

function main() {
	// console.time('inner');
	const LIMIT = 1000000 + 2;
	var arr = Array(LIMIT);
	arr[0] = 0;

	var n = 1;
	for (let i = 1; i < LIMIT; i++) {
		let s = arr[i - 1] + '';
		if (s.length > 1) {
			arr[i] = s.substring(1);
			arr[i - 1] = s.charAt(0);
		} else if (!arr[i]) arr[i] = n++;
	}

	// console.timeEnd('inner');

	// console.time('hardcode');
	// var prod = arr[1] * arr[10] * arr[100] * arr[1000] * arr[10000] * arr[100000] * arr[1000000];
	// console.timeEnd('hardcode');

	return ret(arr, LIMIT);
}


function ret(a, LIMIT) { // optimisation, because let fucking sucks
	// console.time('loop');
	var prod = 1;
	for (let m = 1; m < LIMIT; m *= 10) {
		prod *= a[m];
	}
	// console.timeEnd('loop');

	return prod;
}

console.time('main');

console.log(main() + '');

console.timeEnd('main');