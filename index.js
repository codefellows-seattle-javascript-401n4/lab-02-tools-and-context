'use strict';

const fp = require('/.lib/fp.js');

let numbers = [1,2,3,4,5];
let myCallback = n => n*5;

console.log(fp.mapCall(numbers,myCallback));
console.log(fp.mapApply(numbers,[myCallback]));
