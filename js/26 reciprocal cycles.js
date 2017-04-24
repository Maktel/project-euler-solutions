/* Problem 26

A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:

1/2	= 	0.5
1/3	= 	0.(3)
1/4	= 	0.25
1/5	= 	0.2
1/6	= 	0.1(6)
1/7	= 	0.(142857)
1/8	= 	0.125
1/9	= 	0.(1)
1/10	= 	0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.

Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.

*/

'use strict';

function run() {
	var bestNumber = 0;
	var bestLength = 0;
	for (let i = 1; i <= 10; i++) {
		let len = getCycleLength(i);
		if (len > bestLength) {
			bestNumber = i;
			bestLength = len;
		}
	}
	return bestNumber.toString();
}
	
	
function getCycleLength(n) {
	var stateToIter = new Map();
	var state = 1;
	var iter = 0;
	while (!stateToIter.has(state)) {
		stateToIter.set(state, iter);
		state = state * 10 % n;
		iter++;
	}

	console.log(n, stateToIter);

	return iter - stateToIter.get(state);
}

console.log(1/983, 'cycle length: ' + getCycleLength(983));