/* Problem 6

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

*/

'use strict';

// arguments: bottom range, top range
function squareOfSum(bot, top) {
	var sum = 0;
	for (var i=bot; i<=top; i++) {
		sum += i;
	}

	return (sum*sum);
}

// arguments: bottom range, top range
function sumOfSquares(bot, top) {
	var sqsum = 0;
	for (var i=bot; i<=top; i++) {
		sqsum += (i*i);
	}

	return sqsum;
}

var _squareOfSum = squareOfSum(1, 100); 
var _sumOfSquares = sumOfSquares(1, 100);

console.log('Square of sum: ' + _squareOfSum);
console.log('Sum of squares: ' + _sumOfSquares);
console.log('Difference: ' + Math.abs(_sumOfSquares - _squareOfSum));