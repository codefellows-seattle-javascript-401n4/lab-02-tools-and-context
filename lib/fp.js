'use strict';

const fp = module.exports = {};

fp.mapCall = (list, callback) => Array.prototype.map.call(list, callback);

fp.mapApply = (list, callback) => Array.prototype.map.apply(list, [callback]);
// callback = Array.isArray(callback) ? callback : [callback];

fp.mapBind = function(n, cb) {
    return function(){
      return Array.prototype.map.call(this.n, this.cb);
  }.bind( {n:numbers, cb:myCallback} )();
};
//class examples

console.log( mapCall(numbers, myCallback) );
console.log( mapApply(numbers, myCallback) );
console.log( mapBind() );

fp.filterCall = (list, callback) => Array.prototype.filter.call(list, callback);

fp.filterApply = (list, callback) => Array.prototype.filter.apply(list, [callback]);
// ask about callback = Array.isArray(callback) ? callback : [callback];
//from class examples

fp.filterBind = function(n, cb) {
  return function(){
    return Array.prototype.filter.call(this.n, this.cb);
  }.bind( {n:numbers, cb:myCallback} )();
});
