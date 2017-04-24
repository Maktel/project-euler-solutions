/* Problem 12

The sequence of triangle numbers is generated by adding the natural numbers. 
So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. 
The first ten terms would be:
1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...
Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?

*/

'use strict';

const limit = 500;

// main
var triangle = 0;
console.time('main');
for (let i=1; true; i++) {
	triangle += i;
	if (countDivisors(triangle) > limit) {
		console.log('The smallest triangular number to have over ' + limit +
		' divisors is ' + triangle);
		break;	
	} 
}
console.timeEnd('main');


function countDivisors(n) {
	if (n === 1) return 1;
	if (n === 2) return 2;

	var count = 2; // one and self
	var bound = Math.trunc(Math.sqrt(n)); // int-ify
/*
	Very important comment about code below and concept behind it.
	I was convinced that while counting divisors of a number, you need to check
	all numbers up to a half of a number. BUT as it turns out, you can – and 
	definitely should due to huge performance increase – check divisors only up
	to square root of a divided number WHILE couting each such divisor as two.
	Also floor-ed sqrt should be checked, and if number is a square of it, it
	will be one of divisors.

	Logic behind it is as follows: divisors can be bigger than square root (and
	must be smaller than half, obviously), but for each such divisor there has
	to be a corresponding, smaller than sqrt, divisor – that is a result of 
	the division. Only exception is sqrt, but it corresponds to itself so counts
	just once.
	By the way this is also the reason for checking number's primality only up
	to square root – because these 'greater' divisors cannot exists without 
	their smaller counterparts.
	Using this approach instead of 'up to half' speeds up application severely.
*/
	for (let i=2; i<bound; i++) {
		if (n%i === 0) count += 2;
	}
	if (bound*bound === n) count++; // n is a square of a number 

	return count;
}