/* Problem 9 

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

*/

'use strict';

for (let a=1; a<=500; a++) {
	let shouldBreak = false;
	for (let b=1; b<=500; b++) {
		let c = Math.sqrt(a*a + b*b);
		if ( !(c%1) ) { // legit int
			if (a+b+c === 1000) {
				console.log('a: ' + a + ', b: ' + b + ', c: ' + c);
				console.log('a^2+b^2: ' + (a*a+b*b) + ', c^2: ' + c*c);
				console.log('a+b+c: ' + (a+b+c) + ', abc: ' + (a*b*c));

				shouldBreak = true;
				break;
			}
		}
	}
	if (shouldBreak) break;
}