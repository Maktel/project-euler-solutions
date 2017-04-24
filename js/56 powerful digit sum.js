/* Problem 56

A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large: one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?

*/

'use strict';

var num = [ 1 ];

function main() {
	var max = 0;
	for (let a = 1; a < 100; a++) {
		for (let b = 1; b < 100; b++) {
			toPower(a, b);

			let sum = 0;
			for (let i = num.length - 1; i >= 0; i--) {
				sum += num[i];
			}

			if (sum > max) max = sum;
		}
	}

	return max;
}


function normalise(arr) {
	for (let a = 0; a < arr.length; a++) {
		if (arr[a] >= 10) {
			let overflow = Math.trunc(arr[a] / 10);
			arr[a] = arr[a] % 10;
			if (a + 1 < arr.length) arr[a + 1] += overflow; // in bounds, cell exists
			else arr.push(overflow);
		}
	}
}


function toPower(n, power) {
	num = [ n ];
	for (let a = 1; a <= power; a++) {
		for (let i = 0; i < num.length; i++) {
			num[i] *= n;
		}

		normalise(num);
	}
}


console.time('main');

console.log(main());

console.timeEnd('main');