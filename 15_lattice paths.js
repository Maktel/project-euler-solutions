/* Problem 15

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

*/

/*
The solution is done with usage of dictionary (not exactly, since JS doesn't'
have native dictionary structure, but Map is good enough replacement).

Works like recursive solution, but instead of calculating value for specific
path many times, it caches it for later use.
 */

'use strict';

var cache = new Map();
// (key, value) pairs, where key is concatenated string since object comparison
// in JS is weird

function countRoutes(m, n) {
	if (n === 0 || m === 0) return 1; // reaches individual node

	// cached result exists
	if (cache.has(m + ' ' + n)) return cache.get(m + ' ' + n); 

	// cached result doesn't exist, calculate it recursively
	cache.set(m + ' ' + n, countRoutes(m, n - 1) + countRoutes(m - 1, n));
	return cache.get(m + ' ' + n);
}

console.time('main');

console.log(countRoutes(20, 20));

console.timeEnd('main');