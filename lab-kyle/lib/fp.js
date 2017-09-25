'use strict';

const fp = module.exports = {};

// Map Functions

fp.newMapCall = function (array, callback){
  return Array.prototype.map.call(array, callback);
};

fp.newMapApply = function (array, callback){
  return Array.prototype.map.apply(array, [callback]);
};

fp.newMapBind = function (){};

// Filter Functions

fp.newFilterCall = function (array, callback){
  return Array.prototype.filter.call(array, callback);
};

fp.newFilterApply = function (array, callback){
  return Array.prototype.filter.apply(array, [callback]);
};

fp.newFilterBind = function (){};

// Reduce Functions

fp.newReduceCall = function (array, callback, startHere){
  return Array.prototype.reduce.call(array, callback, startHere);
};

fp.newReduceApply = function (array, callback, startHere){
  return Array.prototype.reduce.apply(array, [callback], startHere);
};

fp.newReduceBind = function (){};

// Concat Functions

fp.newConcatCall = function (array, ...args){
  return Array.prototype.concat.call(array, ...args);
};

fp.newConcatApply = function (array, ...args){
  return Array.prototype.concat.apply(array, [...args]);
};

fp.newConcatBind = function (){};

// Splice Functions

fp.newSpliceCall = function (array, startHere, removeCount, ...args){
  return Array.prototype.splice.call(array, startHere, removeCount, ...args);
};

fp.newSpliceApply = function (array, startHere, removeCount, ...args){
  return Array.prototype.splice.apply(array, [startHere, removeCount, ...args]);
};

fp.newSpliceBind = function (){};
