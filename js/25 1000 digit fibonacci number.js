/* Problem 25

The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the index of the first term in the Fibonacci sequence to contain 1000 digits?

*/

'use strict';

var a = [1],
    b = [1];

const DIGITS = 1000;

console.time('main');
var cnt = 3;
while (true) {
	add(a, b);
	swap(a, b);

	if (b.length >= DIGITS) break;
	else cnt++;
}
console.timeEnd('main');
console.log('1000 digits has %dth number: ' + stringify(b), cnt);

function add(dest, src) {
	for (let i = 0; i < src.length; i++) {
		if (i < dest.length) dest[i] += src[i];
		else dest.push(src[i]);
	}

	normalise(dest);
}

function swap(x, y) {
	var temp = x.splice(0); // VERY IMPORTANT LINE !!!
	// without line above temp would be just a reference to x, which is an
	// object of type array

	x.length = 0;
	for (let i = 0; i < y.length; i++) {
		x[i] = y[i];
	}
	
	y.length = 0;
	for (let i = 0; i < temp.length; i++) {
		y[i] = temp[i];
	}
}

function normalise(arr) {
	for (let a = 0; a < arr.length; a++) {
		if (arr[a] >= 10) {
			let overflow = Math.trunc(arr[a] / 10);
			arr[a] = arr[a] % 10;
			if (a + 1 < arr.length) arr[a + 1] += overflow; // in bounds, cell exists
			else arr.push(overflow);
		}
	}
}

function stringify(num) {
	var str = '';
	for (let i = (num.length - 1); i >= 0; i--) {
		str += num[i];
	}

	return str;
}