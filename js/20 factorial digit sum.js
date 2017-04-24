/* Problem 20

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

*/

'use strict';


// copied pr 16

const LIMIT = 96;

var num = [1];

console.time('main');
for (let a = 1; a <= LIMIT; a++) {
	for (let i = 0; i < num.length; i++) {
		num[i] *= a;
	}

	normalise(num);
}

var result = '',
    answer = 0;
for (let a = num.length - 1; a >= 0; a--) {
	result += num[a].toString();

	answer += num[a];
}
console.timeEnd('main');

console.log('%d factorial: ' + result, LIMIT);
console.log('sum of digits: ' + answer);

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