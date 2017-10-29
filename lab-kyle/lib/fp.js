'use strict';

const fp = module.exports = {};

let trueArray = function(array) {
  if(array.isArray) {
    return array;
  } else {
    return null;
  }
};

// Map Functions

fp.newMapCall = function (array, callback){
  return trueArray(array) ? Array.prototype.map.call(array, callback) : null;
};

fp.newMapApply = function (array, callback){
  return trueArray(array) ? Array.prototype.map.apply(array, [callback]) : null;
};

fp.newMapBind = function (array, callback){
  if(trueArray(array)){
    let bound = Array.prototype.map.bind(array);
    return bound(callback);
  } else {
    return  null;
  }
};

// Filter Functions

fp.newFilterCall = function (array, callback){
  return trueArray(array) ? Array.prototype.filter.call(array, callback) : null;
};

fp.newFilterApply = function (array, callback){
  return trueArray(array) ? Array.prototype.filter.apply(array, [callback]) : null;
};

fp.newFilterBind = function (array, callback){
  if(trueArray(array)){
    let bound = Array.prototype.filter.bind(array);
    return bound(callback);
  } else {
    return  null;
  }
};

// Reduce Functions

fp.newReduceCall = function (array, callback, startHere){
  return trueArray(array) ? Array.prototype.reduce.call(array, callback, startHere) : null;
};

fp.newReduceApply = function (array, callback, startHere){
  return trueArray(array) ? Array.prototype.reduce.apply(array, [callback], startHere) : null;
};

fp.newReduceBind = function (array, callback){
  if(trueArray(array)){
    let bound = Array.prototype.reduce.bind(array);
    return bound(callback);
  } else {
    return  null;
  }
};

// Concat Functions

fp.newConcatCall = function (array, ...args){
  return trueArray(array) ? Array.prototype.concat.call(array, ...args) : null;
};

fp.newConcatApply = function (array, ...args){
  return trueArray(array) ? Array.prototype.concat.apply(array, [...args]) : null;
};

fp.newConcatBind = function (array, ...args){
  if(trueArray(array)){
    let bound = Array.prototype.concat.bind(array);
    return bound(...args);
  } else {
    return  null;
  }
};

// Splice Functions

fp.newSpliceCall = function (array, startHere, removeCount, ...args){
  return trueArray(array) ? Array.prototype.splice.call(array, startHere, removeCount, ...args) : null;
};

fp.newSpliceApply = function (array, startHere, removeCount, ...args){
  return trueArray(array) ? Array.prototype.splice.apply(array, [startHere, removeCount, ...args]) : null;
};

fp.newSpliceBind = function (array, callback){
  if(trueArray(array)){
    let bound = Array.prototype.splice.bind(array);
    return bound(callback);
  } else {
    return  null;
  }
};
