/* Problem 39

If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.

{20,48,52}, {24,45,51}, {30,40,50}

For which value of p ≤ 1000, is the number of solutions maximised?

*/

'use strict';

var ML = require('./mathlib.js');

function main() {
	var squares = [];
	const len = 500;
	for (let i = 0; i <= len; i++) squares[i] = i * i;

	var triplets = [];
	for (let i = 0; i <= len * 2; i++) triplets[i] = [];

	for (let a = 1; a < len; a++) {
		for (let b = 1; b < len; b++) {
			let c = squares.indexOf(squares[a] + squares[b]);
			if (c > -1 && (a + b + c) < len * 2) {
				triplets[a + b + c].push({a, b, c});
			}
		}
	}

	var max = [];
	for (let a of triplets) {
		a.length /= 2;
		if (a.length > max.length) max = a;
	}
	console.log(max);
	var perimeter = max[0].a + max[0].b + max[0].c;

	return perimeter;
}

console.time('main');

console.log(main());

console.timeEnd('main');