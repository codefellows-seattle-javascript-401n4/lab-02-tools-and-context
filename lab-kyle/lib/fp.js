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

fp.newReduceCall = function (array, callback){
  return Array.prototype.reduce.call(array, callback);
};

fp.newReduceApply = function (array, callback){
  return Array.prototype.reduce.apply(array, [callback]);
};

fp.newReduceBind = function (){};

// Concat Functions

fp.newConcatCall = function (array, callback){
  return Array.prototype.concat.call(array, callback);
};

fp.newConcatApply = function (array, callback){
  return Array.prototype.concat.apply(array, [callback]);
};

fp.newConcatBind = function (){};

// Splice Functions

fp.newSpliceCall = function (array, callback){
  return Array.prototype.splice.call(array, callback);
};

fp.newSpliceApply = function (array, callback){
  return Array.prototype.splice.apply(array, [callback]);
};

fp.newSpliceBind = function (){};
