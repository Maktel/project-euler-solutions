/*

Consider all integer combinations of a^b for 2 ≤ a ≤ 5 and 2 ≤ b ≤ 5:

2^2=4, 2^3=8, 2^4=16, 2^5=32
3^2=9, 3^3=27, 3^4=81, 3^5=243
4^2=16, 4^3=64, 4^4=256, 4^5=1024
5^2=25, 5^3=125, 5^4=625, 5^5=3125
If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms:

4, 8, 9, 16, 25, 27, 32, 64, 81, 125, 243, 256, 625, 1024, 3125

How many distinct terms are in the sequence generated by a^b for 2 ≤ a ≤ 100 and 2 ≤ b ≤ 100?

*/

/*

The solution is a bit complicated. It assumes a number cannot be created as a 
square of one number and at the same time as a cube of the other, and so on 
(of course except for bases which are powers themselves, e.g. 4, 27, 100).

First, we calculate how many numbers with unique exponentials are in the range
(countNonPowers function). It is done by removing from the range squares, cubes,
etc., as well as their bases. Then multiply number of exponents by how many
numbers remained after this step.

Second, we get rid of overlapping exponentials. For every non power number 
smaller than square root of bases top bound (as there cannot be square greater
than 10 smaller than 10^2), loop over every power within range and calculate the 
number of overlapping exponentials (see the example at the bottom of a file). 

Add both numbers and you have the answer.

*/

'use strict';

const LIMITS = {
	_a: 2,
	a: 100,
	_b: 2,
	b: 100,
}

function countNonPowers(LIMITS) {
	var arr = [NaN, NaN]; // begin from 2 -- hard coded LIMITS._a, so that indexes match number
	{ // fill array with trues
		let arrSize = LIMITS.a - LIMITS._a + 1;
		while (arrSize--) arr.push(true);
	}

	// assign false to every number that is not a power of other number within range
	// as well as the base number (e.g. 4 and 2 respectively)
	for (let i = LIMITS._a; i <= LIMITS.a; i++) {
		let pow = i * i;
		while (pow <= LIMITS.a) {
			arr[pow] = false;
			arr[i] = false;
			pow *= i;
		}
	}

	// for (let i = 0; i < arr.length; i++) console.log(i, arr[i]);

	var sum = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i]) sum++;
	}

	return sum * (LIMITS.b - LIMITS._b + 1);
}

console.time('main');

var non = countNonPowers(LIMITS);
var pow = countPowers(LIMITS);

console.timeEnd('main');

console.log(non, pow, 'res: ' + (non + pow));


function countPowers(LIMITS) {
	var sum = 0;

	var nonPowers = Array(Math.trunc(Math.sqrt(LIMITS.a)) + 1);
	nonPowers.fill(true, 2);
	for (let i = LIMITS._a; i <= Math.sqrt(LIMITS.a); i++) { // remove 4, 8, 9 from non prime list
		let pow = i * i;
		while (pow <= Math.sqrt(LIMITS.a)) {
			nonPowers[pow] = false;
			pow *= i;
		}
	}

	for (let a = LIMITS._a; a <= Math.sqrt(LIMITS.a); a++) { // for every non power to a bound
		if (!nonPowers[a]) continue;

		var pows = new Set();
		for (let p = 1; Math.pow(a, p) <= LIMITS.a; p++) { // for coprime's powers (3: 3, 9, 27, 81)
			for (let e = LIMITS._b; e <= LIMITS.b; e++) { // for every exponential (3^2, 3^3, ...)
				pows.add(p * e);

			}
		}

		sum += pows.size;
	}

	return sum;
}

/*

2^3 = 8
2^6 = 64
2^9 = 512
2^12 = 4096

2^4 = 16
2^8 = 256
2^12 = 4096

2:
4 8 16 32 64 128 256 512 1024 2048 4096 8192

4:
    16    64     256     1024      4096

8:
          64         512           4096

16:
                 256               4096

0. poniższy algorytm dla 2, 3, 5, 6, 7, 10 [względnie pierwsze do sqrt(LIMIT.a) ?]
1. wziąć wszystkie wielokrotności 2 w zakresie <_a, a>
1a. policzyć ich sumę * b - _b + 1 (później od niej odejmiemy)
2. przedstawić je jako potęgi 2
3. znaleźć wszystkie powtarzające się wielokrotności (schemat wyżej)
4. odjąć liczbę powtórzeń
5. dodać to od wyniku z countNonPowers() (ostateczny wynik to 9183)

Można także zapierdolić bruteforce, chociaż 100^100 to tak trochę 2/10
*/
