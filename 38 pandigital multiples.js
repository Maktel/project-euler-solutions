/*

Take the number 192 and multiply it by each of 1, 2, and 3:

192 × 1 = 192
192 × 2 = 384
192 × 3 = 576
By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1,2,3)

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1,2, ... , n) where n > 1?

*/

'use strict';

var ML = require('./mathlib.js');

function main() {
	var prod = [];

	for (let i = 1; i < 10000; i++) {
		let s = '';
		for (let n = 1; ; n++) {
			s += n * i;
			// pandigital numbers range from 100000000 to 1000000000
			if (Number(s) >= 1000000000) break; // too long

			if (ML.isPandigital(s)) {
				prod.push(Number(s));
				break;
			}
		}
	}

	prod.sort(function(a, b) {return b - a});

	return prod[0];
}


console.time('main');

console.log(main()); // 932718654

console.timeEnd('main');
