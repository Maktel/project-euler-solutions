/* Problem 15

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

*/

'use strict';

// const grid = 20;

/* v1, recursive, incredibly slow, takes over 10 minutes */


// number of moves right/bottom
/*function routes(r, b) {
	if (r + b === (2 * grid - 1)) return 1;

	// exclude border nodes
	var sum = 0;
	if (r < grid) sum += routes(r + 1, b);
	if (b < grid) sum += routes(r, b + 1);

	return sum;
}

console.time('main');
console.log(routes(0, 0));
console.timeEnd('main');*/

/* v3, doesnt work because JS */
/*var cache = Array(21);
cache.fill(Array(21));

function recursive(m, n) {
	if (m === 0 || n === 0) return 1;

	if (cache[m][n]) return cache[m][n];

	cache[m][n] = recursive(m, n - 1) + recursive(m - 1, n);
	return cache[m][n];
}

console.time('cache');

console.log(recursive(20, 20));
// console.log(cache);

console.timeEnd('cache');*/


/* INTERNET */

/* --- */
// const _gridSize = 20;
// var _paths = 1;
 
// for (let i = 0; i < _gridSize; i++) {
//     _paths *= (2 * _gridSize) - i;
//     _paths /= i + 1;
// }

// console.log('check: ' + _paths);

// /* --- */
// const gridSize = 20;
// var grid = [];
// for (let i=0; i<=gridSize; i++) {
// 	grid[i] = new Array(gridSize);
// }
 
// //Initialise the grid with boundary conditions
// for (let i = 0; i < gridSize; i++) {
//     grid[i][gridSize] = 1;
//     grid[gridSize][i] = 1;
// }

// for (let i = gridSize - 1; i >= 0; i--) {
//     for (let j = gridSize - 1; j >= 0; j--) {
//         grid[i][j] = grid[i+1][j] + grid[i][j+1];
//     }
// }

// console.log(grid[0][0]);