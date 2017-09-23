'use strict';

const fp = module.exports = {};

fp.mapCall = function(array, callback){
  return Array.prototype.map.call(array, callback);
};

// fp.mapBind = function(myArray, myCallback) {
//   return Array.prototype.map.call(this.array, this.callback);}.bind({array:myArray, callback:myCallback});

fp.mapApply = function(array, callback) {
  //if callback is an array, then leave it as an array if not convert the callback into an array
  callback = Array.isArray(callback) ? callback : [callback];
  return Array.prototype.map.apply(array, callback)
};

fp.filterCall = function(array, callback) {
  return Array.prototype.filter.call(array, callback);
};

fp.filterApply = function(array, callback) {
  //if callback is an array, then leave it as an array if not convert the callback into an array
  callback = Array.isArray(callback) ? callback : [callback];
  return Array.prototype.filter.apply(array, callback)
};

fp.reduceCall = function(array, callback) {
  return Array.prototype.reduce.call(array, callback);
};

fp.reduceApply = function(array, callback) {
  callback = Array.isArray(callback) ? callback : [callback];
  return Array.prototype.reduce.apply(array, callback);
};

fp.concatCall = function(array1, array2) {
  return Array.prototype.concat.call(array1, array2);
};

fp.concatApply = function(array1, array2) {
  return Array.prototype.concat.apply(array1, array2);
};

fp.spliceCall = function(array, ...args) {
  return Array.prototype.splice.call(array, ...args);
};

fp.spliceApply = function(array, ...args) {
  return Array.prototype.splice.apply(array, args);
};
