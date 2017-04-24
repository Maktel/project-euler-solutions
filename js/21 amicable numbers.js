/* Problem 21

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

*/

// slow solution, takes ~8s

'use strict';

const BOUND = 10000;

var divs = [];

// pushes all divisors of n into divs global array
function getDivs(n) {
	var sqrt = Math.trunc(Math.sqrt(n));
	divs.push(1);
	for (let i = 2; i <= sqrt; i++) {
		if (n % i === 0) {
			divs.push(i, n / i);
		}
	}
	if (sqrt * sqrt === n) divs.pop();
}

// returns sum of divisors from divs global array
function sumDivs() {
	let sum = 0;
	for (let e of divs) {
		sum += e;
	}

	return sum;
}


function main() {
	var d = [NaN]; // cell i holds d(i)
	var sum = 0;

	for (let i = 1; i < BOUND; i++) { // push all of d(n) to array
		getDivs(i);
		d.push(sumDivs());

		divs.length = 0;
	}


	for (let i = 1; i < d.length; i++) { // iterate through numbers looking for matches
		for (let j = 1; j < d.length; j++) { // go through array of d()'s
			if ((d[j] === i) && (d[i] === j) && (i !== j)) {
				sum += i;
				console.log('pairs (i, d[j], d[i], j):', i, d[j], d[i], j);
			}
		}
	}

	return sum;
}

console.time('main');
console.log('answer: ' + main());
console.timeEnd('main');