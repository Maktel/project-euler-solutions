/* Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

'use strict';

var n = 2520;

var runMain = true;

console.time('main');
while (runMain) {
	if (div(n)) {
		console.log(n);
		break;
	}
	else {
		n += 2520; // result is a multiple of this number
	}
}

console.timeEnd('main');


var result = 2*3*4*5*7*3*11*13*2*17*19;
console.log(result, div(result));


function div(n) {
	// medium speed
	for (var i=20; i>=2; i--) { // go down for efficiency
		if (n%i) {
			return false;
		}
	}

	// slow because of array
	// var divisors = [20, 19, 17, 16, 13, 11, 9, 7];
	// for (var i=0; i<8; i++) {
	// 	if (n%divisors[i]) {
	// 		return false;
	// 	}
	// }

	// very fast
	// if (n%20) return false;
	// if (n%19) return false;
	// if (n%17) return false;
	// if (n%16) return false;
	// if (n%13) return false;
	// if (n%11) return false;
	// if (n%9) return false;
	// if (n%7) return false;

	return true;

}