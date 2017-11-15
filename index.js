'use strict';

const fp = require('/.lib/fp.js');
// const fp = require('/.lib/fp_test.js');

let numbers = [2,4,6,8];
let myCallback = numbers => numbers*0.5;

console.log(fp.mapCall(numbers,myCallback));
console.log(fp.mapApply(numbers,[myCallback]));
