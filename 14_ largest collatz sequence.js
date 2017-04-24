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


/* 
Let's give this problem another try.
My previous solution was fairly slow, taking about 22 seconds (17 if optimised)
to finish, which is not the greatest of results. A brute force method cannot
be sped up in a simple way (that is without language based shenanigans), but
we can try another approach. 

Start counting the sequence from the bottom to the top. Store length of a series
for each number. Then if during calculation of series for bigger number we
encounter element smaller than the starting number, we end calculation and 
simply add to the length of this series the length of elements series.

15 times faster than my previous solution.
*/


'use strict';

const LIMIT = 1000000;

var sequences = Array(LIMIT + 1);
sequences[0] = NaN;
sequences[1] = 1;

function main() {
	var maxIndex = 0,
	    maxLen = 1;
	for (let i = 2; i <= LIMIT; i++) {
		let len = collatz(i);

		if (len > maxLen) {
			maxIndex = i;
			maxLen = len;
		}
	}

	return maxIndex;
}

console.time('main');

console.log(main());
// console.log(sequences);

console.timeEnd('main');

// seed is number to start the sequence
// returns length of series
function collatz(seed) {
	var len = 1,
	    i = seed;

	while(true) {
		i = object(i);

		if (i < seed) {
			len += sequences[i];
			sequences[seed] = len;
			break;
		} 

		len++;
	}

	return len;
}

// argument: n is argument of Collatz sequence
function object(n) {
	if (n % 2) return (3 * n + 1);
	else return Math.trunc(n / 2);
}