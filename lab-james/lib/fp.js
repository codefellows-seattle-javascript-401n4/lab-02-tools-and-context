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

let mapArray2 = ['red', 'blue', 'green'];
let mapCB2 = index => index.toUpperCase();

functions.mapBind2 = function(){

  return Array.prototype.map.call(this.array, this.callback);

}.bind({array: mapArray2, callback: mapCB2});

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

let filterArray2 = ['red', 'blue', 'green'];
let filterCB2 = word => word.length > 3;

functions.filterBind2 = function(){

  return Array.prototype.filter.call(this.array, this.callback);

}.bind({array: filterArray2, callback: filterCB2});

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

let reduceArray2 = ['red', 'blue', 'green', 'red', 'green'];
let reduceAcc = [];
let reduceCB2 = (acc, index) => {

  if(!acc.includes(index)){

    acc.push(index);

  }

  return acc;

};

functions.reduceBind2 = function(){

  return Array.prototype.reduce.call(this.array, this.callback, this.acc);

}.bind({array: reduceArray2, callback: reduceCB2, acc: reduceAcc});

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

let concatArray3 = ['red', 'blue', 'green'];
let concatArray4 = ['white', 'yellow', 'purple'];

functions.concatBind2 = function(){

  return Array.prototype.concat.call(this.array1, this.array2);

}.bind({array1: concatArray3, array2: concatArray4});

//Splice================================================================================================



functions.spliceCall = function(array, index, deletes, adds){

  let spliceArray = array;

  //got this idea from Bryan Matthews on StackOverflow
  if(arguments.length > 3){

    Array.prototype.splice.call(spliceArray, index, deletes, adds);

  } else {

    Array.prototype.splice.call(spliceArray, index, deletes);

  }

  return spliceArray;

};

functions.spliceApply = function(array, argsArray){

  let spliceArray = array;

  argsArray = Array.isArray(argsArray) ? argsArray : [argsArray];

  Array.prototype.splice.apply(array, argsArray);

  return spliceArray;

};

let spliceBindArray = [1, 2, 3];
let spliceIndex = 1;
let spliceDeletes = 0;
let spliceAdds = 4;

functions.spliceBind = function(){

  let spliceArray = spliceBindArray;

  Array.prototype.splice.call(this.array, this.index, this.deletes, this.adds);

  return spliceArray;

}.bind({array: spliceBindArray, index: spliceIndex, deletes: spliceDeletes, adds: spliceAdds});

let spliceBindArray2 = ['cat', 'dog', 'mouse'];
let spliceIndex2 = 0;
let spliceDeletes2 = 1;

functions.spliceBind2 = function(){

  let spliceArray = spliceBindArray2;

  Array.prototype.splice.call(this.array, this.index, this.deletes);

  return spliceArray;

}.bind({array: spliceBindArray2, index: spliceIndex2, deletes: spliceDeletes2});
