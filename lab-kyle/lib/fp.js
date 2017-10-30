'use strict';

const fp = module.exports = {};

// Map Functions

fp.newMapCall = function (array, callback){
  return Array.prototype.map.call(array, callback);
};

fp.newMapApply = function (array, callback){
  return Array.prototype.map.apply(array, [callback]);
};

fp.newMapBind = function (array, callback){
  let bound = Array.prototype.map.bind(array);
  return bound(callback);
};

// Filter Functions

fp.newFilterCall = function (array, callback){
  return Array.prototype.filter.call(array, callback);
};

fp.newFilterApply = function (array, callback){
  return Array.prototype.filter.apply(array, [callback]);
};

fp.newFilterBind = function (array, callback){
  let bound = Array.prototype.filter.bind(array);
  return bound(callback);
};

// Reduce Functions

fp.newReduceCall = function (array, callback){
  return Array.prototype.reduce.call(array, callback);
};

fp.newReduceApply = function (array, callback){
  return Array.prototype.reduce.apply(array, [callback]);
};

fp.newReduceBind = function (array, callback){
  let bound = Array.prototype.reduce.bind(array);
  return bound(callback);
};

// Concat Functions

fp.newConcatCall = function (array, ...args){
  return Array.prototype.concat.call(array, ...args);
};

fp.newConcatApply = function (array, ...args){
  return Array.prototype.concat.apply(array, [...args]);
};

fp.newConcatBind = function (array, ...args){
  let bound = Array.prototype.concat.bind(array);
  return bound(...args);
};

// Splice Functions

fp.newSpliceCall = function (array, startHere, endIt){
  return Array.prototype.splice.call(array, startHere, endIt);
};

fp.newSpliceApply = function (array, startHere, endIt){
  return Array.prototype.splice.apply(array, [startHere, endIt]);
};

fp.newSpliceBind = function (array, startHere, endIt){
  let bound = Array.prototype.splice.bind(array);
  return bound(startHere, endIt);
};
