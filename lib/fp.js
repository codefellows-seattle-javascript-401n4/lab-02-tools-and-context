'use strict';

const fp = module.exports = {};

let numbers = [2,4,6,8];
let myCallback = numbers => numbers*0.5;
let callback = Array.isArray(callback) ? callback : [callback];

fp.mapCall = (array, callback) =>
  Array.prototype.map.call(array, callback);

fp.mapApply = (array, callback) => Array.prototype.map.apply(array, [callback]);
// callback = Array.isArray(callback) ? callback : [callback];
//why isnt this working from class example? ^

fp.mapBind = function() {
  return Array.prototype.map.call(this.n, this.cb);
}.bind( {n:numbers, cb:myCallback} );

console.log( fp.mapCall(numbers, myCallback) );
console.log( fp.mapApply(numbers, [myCallback]) );
console.log( fp.mapBind() );

fp.filterCall = (array, callback) => Array.prototype.filter.call(array, callback);

fp.filterApply = (array, [callback]) => Array.prototype.filter.apply(array, [callback]);

fp.filterBing = function() {
  return Array.prototype.filter.call(this.n, this.cb);
}.bind( {n:numbers, cb:myCallback} );

fp.reduceCall = (array, callback) => Array.prototype.reduce.call(array, callback);
fp.reduceApply = (array, callback) => Array.prototype.reduce.apply(array, [callback]);

fp.reduceBind = function() {
  return Array.prototype.reduce.call(this.n, this.cb);
}.bind( { n:numbers, cb:(acc+current) } );

fp.concatCall = (array, callback)=> Array.prototype.concat.call(array, callback);
fp.concatApply = (array, [callback]) => Array.prototype.concat.apply(array, [callback]);

fp.concatBind = function() {
  return Array.prototype.concat.call(this.n, this.cb);
}.bind( {n:numbers, cb:myCallback} );

fp.spliceCall = (array,  ...words) => Array.prototype.splice.call(array, ...words);

fp.spliceApply = (array, [ ...words]) => Array.prototype.splice.apply(array, [ ...words]);

fp.spliceBind = function() {
  return Array.prototype.splice.call(this.n, this.cb);
}.bind( {n:numbers, cb:myCallback} );
