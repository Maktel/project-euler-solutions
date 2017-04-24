/* Problem 23

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

*/

'use strict';

var numbers = [false]; // length 28321 + 1

console.time('isAbundant');
for (let i=1; i <= 28321; i++) {
	if (sumOfDivisors(i) > i) {
		numbers.push(true);
	} else numbers.push(false);
}
console.timeEnd('isAbundant');

// highly functional function to sum divisors
function sumOfDivisors(n) {
	var sum = 1;

	var end = Math.trunc(Math.sqrt(n));
	for (let i = 2; i <= end; i++) {
		if (n % i === 0) {
			sum += i + n / i;
		}
	}
	// loop can be done to i < end and then if below adds end to sum instead
	if (end * end === n) sum -= end;

	return sum;
}

var notsums = [];

function generateSumOfAbundants() {
	for (let i = 1; i < numbers.length; i++) { // for each number
		if (!isSumOf2Abundants(i)) notsums.push(i);
	}

	var sum = 0;
	for (let n of notsums) sum += n;

	return sum;
}

function isSumOf2Abundants(n) {
	for (let i = 1; i <= n; i++) {
		if (numbers[i] && numbers[n - i]) return true;
	}

	return false;
}

console.time('abundants');
console.log(generateSumOfAbundants());
console.timeEnd('abundants');
notsums.sort(function(a, b) { return a - b });
// console.log('' + notsums);