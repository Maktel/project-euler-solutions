/* Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.

*/

'use strict';

var details = {
	i: 0,
	j: 0,
	product: 0
};

console.time('main');
var hrstart = process.hrtime();

for (var i = 999; i > 99; i--) {
	for (var j = 999; j > 99; j--) {
		if (isPalindrome(i*j) && (i*j) >= details.product) {
			details.i = i;
			details.j = j;
			details.product = i*j;
		}
	}
}

var hrend = process.hrtime(hrstart);
console.timeEnd('main');
console.log('Computation time: %ds %dms', hrend[0], hrend[1]/1000000);
console.log('Largest palidrome ' + details.product + ' is a product of ' + details.i + ' and ' + details.j);


function isPalindrome(n) {
	var s = n.toString(); // String(n) / n + '' / '' + n
	var len = s.length;
	for (var i = 0; i < len; i++) {
		if (s[i] !== s[(len-1)-i]) {
			return false;
		}
	}

	return true;
}