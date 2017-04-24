/* Problem 33

The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.

We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.

If the product of these four fractions is given in its lowest common terms, find the value of the denominator.

*/

'use strict';

// such an ugly solution ;o
function main() {
	var arr = [];

	for (let i = 10; i <= 99; i++) {
		for (let j = 10; j < i; j++) {
			if (i % 10 === 0 && j % 10 === 0) continue;

			let n = sharesDigit(i, j);
			if (n) {
				n = Number(n[1] / n[0]);
				if (n === i / j) arr.push([i, j]);
			}
		}
	}

	var nom = 1,
	    den = 1;
	for (let o of arr) {
		console.log(o);
		nom *= o[0];
		den *= o[1];
	}

	return nom / den;
}

console.time('main');

console.log(main());

console.timeEnd('main');

function sharesDigit(aa, bb) {
	var a = [(aa - aa % 10)/ 10 % 10, aa % 10];
	var b = [(bb - bb % 10)/ 10 % 10, bb % 10];

	if (a.indexOf(b[0]) === 0) return [b[1], a[1]];
	if (a.indexOf(b[0]) === 1) return [b[1], a[0]];

	if (a.indexOf(b[1]) === 0) return [b[0], a[1]];
	if (a.indexOf(b[1]) === 1) return [b[0], a[0]];

	return false;
}