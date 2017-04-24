/* Problem 14

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

'use strict';

const limit = 1000000;

var seq = [];
var max = {
	seed: 0,
	len: 0
};

console.time('main');

// main
for (let i = 1; i < limit; i++) {
	var len = collatz(i, seq);
	// console.log('' + seq);

	if (len >= max.len) {
		max.len = len;
		max.seed = i;
	}

	seq.length = 0; // or seq = [] or seq.splice(0, seq.length);
	
}

console.log(max);

console.timeEnd('main');

// seed is number to start the sequence
// seq is array to which sequence is saved
// returns length of series
function collatz(seed, seq) {
	// can be sped up by removing array part for simple cnt variable
	seq.push(seed);

	var i = seed;
	while(true) {
		let c = object(i);
		seq.push(c);

		if (c === 1) break;
		else i = c;
	}

	return seq.length;
}

// argument: n is argument of Collatz sequence
function object(n) {
	if (n % 2) return (3 * n + 1);
	else return Math.trunc(n / 2);
}