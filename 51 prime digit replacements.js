/* Problem 51

By replacing the 1st digit of the 2-digit number *3, it turns out that six of the nine possible values: 13, 23, 43, 53, 73, and 83, are all prime.

By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having seven primes among the ten generated numbers, yielding the family: 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003, being the first member of this family, is the smallest prime with this property.

Find the smallest prime which, by replacing part of the number (not necessarily adjacent digits) with the same digit, is part of an eight prime value family.

*/

'use strict';

console.time('sieve');

const debugged = 121313;

const family = 8;

var ML = require('./mathlib.js');
const sieveBound = 1000000;
const sieve = ML.sieve(sieveBound);

var primes = Array();
for (let i = 0; i < sieveBound; i++) {
	if (sieve[i]) primes.push(i);
}

console.timeEnd('sieve');

console.time('main');

console.log(main());

console.timeEnd('main');

// iterates over all primes and performs a check
function main() {
	var limit = primes.length;
	for (let i = 5; i < limit; i++) {
		let s = primes[i] + '';
		// console.log('prime ' + s);
		let perm = Array(s.length - 1).fill(0);
		perm[perm.length - 1] = 1;

		let res = allPermsCheck(perm, primes[i]);
		if (res) return s;
	}

	return false;
}

/**
 * Generates all possible permutation and for each of them triggers check
 * @param {Array} perm
 * @param {number} num
 */
function allPermsCheck(perm, num) {
	var maxed = 1;
	var cnt = 0;
	var index = perm.length - 1;

	while (true) {
		if (digitValidator(perm, num)) return true;
		while (ML.nextPermutation(perm)) if (digitValidator(perm, num)) return true;

		if (--index < 0) break;
		perm.fill(0);
		perm.fill(1, index);
	}

	return false;
}

/**
 * Eliminates false positives for check()
 */
function digitValidator(perm, num) {
	var digits = (ML.getDigits(num)).reverse();

	// if (num === debugged) {
	// 	console.log('being checked', perm, num);
	// }

	var uniqueDigit;
	for (let i = perm.length; i > 0; i--) {
		if (perm[i]) {
			if (typeof(uniqueDigit) === 'undefined') {
				if (digits[i] > 10 - family) { // fools margin in check()
					return false;
				}

				uniqueDigit = digits[i];
				continue;
			}

			if (digits[i] !== uniqueDigit) return false;
		}
	}

	var res = check(perm.join('') + '0', num, uniqueDigit);

	// if (num === debugged) {
	// 	console.log('passed', perm, num);
	// 	console.log(res);
	// }

	return res;
}


/**
 * Performs simple number and permutation addition and primarity check
 * @param {number} perm - must be cast to a number, don't know why
 * @param {number} num
 * @param {number} notCheck - eliminates potential overflow
 * @example 
 * if (check(perm.join('') + '0', num)) return true;
 */
function check(perm, num, notChecked) {
	perm = parseInt(perm);

	var margin = 10 - family - notChecked;

	var cnt = 1;

	for (let i = 1; i <= 9; i++) {
		let possible = perm * i + num;
		// too long, immediate hotfix
		if ((possible).toString().length > num.toString().length) break;

		if (isPrime(possible)) cnt++;
		else margin--;

		if (margin < 0) break;


		if (num === debugged) console.log(possible, isPrime(perm + num), margin, cnt);
		// if (num === debugged) ML.sleep(1);
	}

	if (num === debugged) console.log(cnt === family);

	return cnt === family;
}


function isPrime(n) {
	return n < sieveBound ? sieve[n] : ML.isPrime(n);
}