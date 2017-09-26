'use strict';

let functions = module.exports = {};

//Map===================================================================================================

functions.mapCall = function(array, callback){

  return Array.prototype.map.call(array, callback);

};

functions.mapApply = function(array, callback){

  callback = Array.isArray(callback) ? callback : [callback];

  return Array.prototype.map.apply(array, callback);

};

let mapArray = [1, 2, 3];
let mapCB = n => n * 2;

functions.mapBind = function(){

  return Array.prototype.map.call(this.array, this.callback);

}.bind({array: mapArray, callback: mapCB});

//Filter================================================================================================

functions.filterCall = function(array, callback){

  return Array.prototype.filter.call(array, callback);

};

functions.filterApply = function(array, callback){

  callback = Array.isArray(callback) ? callback : [callback];

  return Array.prototype.filter.apply(array, callback);

};

let filterArray = [1, 2, 3];
let filterCB = n => n < 3;

functions.filterBind = function(){

  return Array.prototype.filter.call(this.array, this.callback);

}.bind({array: filterArray, callback: filterCB});

//Reduce================================================================================================

functions.reduceCall = function(array, callback, initVal){

  return Array.prototype.reduce.call(array, callback, initVal);

};

functions.reduceApply = function(array, argsArray){

  argsArray = Array.isArray(argsArray) ? argsArray : [argsArray];

  return Array.prototype.reduce.apply(array, argsArray);

};

let reduceArray = [1, 2, 3];
let reduceCB = (acc, n) => acc + n;

functions.reduceBind = function(){

  return Array.prototype.reduce.call(this.array, this.callback);

}.bind({array: reduceArray, callback: reduceCB});

//Concat================================================================================================

functions.concatCall = function(array1, array2){

  return Array.prototype.concat.call(array1, array2);

};

functions.concatApply = function(array1, argsArray){

  argsArray = Array.isArray(argsArray) ? argsArray : [argsArray];

  return Array.prototype.concat.apply(array1, argsArray);

};

let concatArray1 = [1, 2, 3];
let concatArray2 = [4, 5, 6];

functions.concatBind = function(){

  return Array.prototype.concat.call(this.array1, this.array2);

}.bind({array1: concatArray1, array2: concatArray2});

//Splice================================================================================================



functions.spliceCall = function(array, index, deletes, adds){

  let spliceArray = array;

  Array.prototype.splice.call(spliceArray, index, deletes, adds);

  return spliceArray;

};

functions.spliceApply = function(array, argsArray){

  let spliceArray = array;

  argsArray = Array.isArray(argsArray) ? argsArray : [argsArray];

  Array.prototype.splice.apply(array, argsArray);

  return spliceArray;

};
