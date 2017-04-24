/*

Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:

21 22 23 24 25
20  7  8  9 10
19  6  1  2 11
18  5  4  3 12
17 16 15 14 13

It can be verified that the sum of the numbers on the diagonals is 101.

What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?

*/


'use strict';

function main(size) {
	var sum = 1; // start with 1
	var n = 3, // add 3 as a first number
	    cnt = 0,
	    dif = 2;
	for (let i = 1; i < 2 * size - 1; i++, n += dif) {
		console.log(n);
		if (++cnt === 4) { // after 4 corners, increase difference to the length of a row/column
			dif += 2;
			cnt = 0;
		} 

		sum += n;
	}

	return sum;
}

console.time('main');

console.log(main(1001));

console.timeEnd('main');

/* 
1 3 5 7 9 13 17 21 25 31 37 43 49
 2 2 2 2 4  4  4  4  6  6  6  6
*/