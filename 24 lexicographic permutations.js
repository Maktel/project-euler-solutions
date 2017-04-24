/* Problem 24

A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

012   021   102   120   201   210

What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?

*/

'use strict';

function main() {
	const LIMIT = 1000000 - (2*3*4*5*6*7*8*9) * 2 - (2*3*4*5*6*7*8) * 6 - (2*3*4*5*6*7) * 6;

	console.log(LIMIT);

	var count = 0;
	for (var i = 2780134569; i < 9999999999; i++) {
		if (isPerm(i)) {
			count++;
			// console.log(i);
		}

		if (count === LIMIT) break; 
	}

	return i;
}

console.time('main');

// console.log(main());

console.timeEnd('main');


function isPerm(n) {
	var arr = [];

	for (let i = n; i > 0; i = Math.trunc(i / 10)) {

		let rem = i % 10;
		if (arr.indexOf(rem) > -1) return false;
		else {
			arr.push(rem);
		}
	}
	
	return true;
}

// almost 2 times slower, dunno why
function _isPerm(n) {
	n += '';

	for (let i = 0; i <= 9; i++) {
		if (n.indexOf(i) === -1) return false;
	}

	return true;
}

/* LIMIT CALCULATION
0123456789
0123456798
0123456879
0123456897
0123456978
0123456987
0123457689
0123457698
0123457869
0123457896
0123457968
0123457986
0123458679

0xxxxxxxxx - 9! * 2
1023456789

2103456789 - 8! * 6
2301456789
2401346789
2501346789
2601345789
2701345689

2710345689 - 7! * 6
2730145689
2740135689
2750134689
2760134589
2780134569
*/

/* Project nayuki solution */
/* I don't get this permutation function at all, but it works */

// receives array of digits
function nextPermutation(a) {
	var n = a.length, i, j;
	for (i = n - 2; ; i--) { // sets i position
		if (i < 0)
			return false;
		if (a[i] < a[i + 1])
			break;
	}
	for (j = 1; i + j < n - j; j++) { // swaps some values
		let tp = a[i + j];
		a[i + j] = a[n - j];
		a[n - j] = tp;
	}
	for (j = i + 1; a[j] <= a[i]; j++); // position set for j
	var tp = a[i]; // swap
	a[i] = a[j];
	a[j] = tp;

	return true;
}

function _main() {
	var perm = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(perm);

	var cnt = 1;
	while (cnt++ !== 1000000) nextPermutation(perm);

	console.log(perm);
}

console.time('_main');

_main();

console.timeEnd('_main');