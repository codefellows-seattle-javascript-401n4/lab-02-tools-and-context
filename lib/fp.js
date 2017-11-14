'use strict';

const fp = module.exports = {};


let numbers = [1,2,3,4,5];
numbers.map( function(n) {
  return n*2;
});

function map(list, callback) {
  return Array.prototype.map.call(list, callback);
}
map(numbers, n=>n*2);
