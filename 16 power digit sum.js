/* Problem 16

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?

*/

'use strict';

const POWER = 1000;

var num = [1];

console.time('main');
for (let a = 1; a <= POWER; a++) {
	for (let i = 0; i < num.length; i++) {
		num[i] *= 2;
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

console.log('2 to the power of 1000: ' + result);
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