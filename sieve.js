'use strict';

var ML = require('./mathlib.js');

console.time('sieve');

const sieve = ML.sieve(1000000000);

console.timeEnd('sieve');
