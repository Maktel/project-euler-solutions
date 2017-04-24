/* Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

var topRange = 1000;
var bottomRange = 0;
var firstDiv = 3;
var secondDiv = 5;
var result = 0;

for (var i=bottomRange; i<topRange; i++) {
	if (i%firstDiv === 0 || i%secondDiv === 0) {
		result += i;
	}
}

console.log('Sum of multiples of ' + firstDiv + ' and ' + secondDiv + ' in range (' + topRange + ', ' + bottomRange + ') is equal to ' + result)