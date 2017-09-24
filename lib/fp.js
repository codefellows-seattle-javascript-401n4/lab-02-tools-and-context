'use strict';

const fp = module.exports = {};

fp.mapCall = function(array, callback){
  return Array.prototype.map.call(array, callback);
};

fp.mapBind = function(myArray,myCallback){
  let runme = function () {
    return Array.prototype.map.call(this.array, this.callback);}.bind({array:myArray, callback:myCallback});

  return runme();
};

fp.mapApply = function(array, callback) {
  //if callback is an array, then leave it as an array if not convert the callback into an array
  callback = Array.isArray(callback) ? callback : [callback];
  return Array.prototype.map.apply(array, callback);
};

fp.filterCall = function(array, callback) {
  return Array.prototype.filter.call(array, callback);
};

fp.filterBind = function(myArray,myCallback){
  let runme = function (myArray,myCallback) {
    return Array.prototype.filter.call(this.array, this.callback);}.bind({array:myArray, callback:myCallback});

  return runme();
};

fp.filterApply = function(array, callback) {
  //if callback is an array, then leave it as an array if not convert the callback into an array
  callback = Array.isArray(callback) ? callback : [callback];
  return Array.prototype.filter.apply(array, callback);
};

fp.reduceCall = function(array, callback) {
  return Array.prototype.reduce.call(array, callback);
};

fp.reduceBind = function(myArray, myCallback){
  let runme = function (myArray, myCallback) {
    return Array.prototype.reduce.call(this.array, this.callback);}.bind({array:myArray, callback:myCallback});

  return runme();
};

fp.reduceApply = function(array, callback) {
  callback = Array.isArray(callback) ? callback : [callback];
  return Array.prototype.reduce.apply(array, callback);
};

fp.concatCall = function(array1, array2) {
  return Array.prototype.concat.call(array1, array2);
};


fp.concatBind = function(myArray1, myArray2){
  let runme = function (myArray1, myArray2) {
    return Array.prototype.concat.call(this.array1, this.array2);}.bind({array1:myArray1, array2:myArray2});

  return runme();
};

fp.concatApply = function(array1, array2) {
  return Array.prototype.concat.apply(array1, array2);
};

//call() accepts an argument list
fp.spliceCall = function(array, ...args) {
  return Array.prototype.splice.call(array, ...args);
};

//.bind(thisArg[, arg1[, arg2[, ...]]])
fp.spliceBind = function(myArray, ...myArgs) {
  let runme = function(myArray, ...myArgs) {
    console.log('hi from inside runme function');
    console.log('this.array: ' + this.array);
    console.log('this.args: ' + this.args);
    // console.log('...this.args: ' + ...this.args);///console.log does NOT WORK in this case bc console.log can only takes a string. It cannot take a list of arguments
//call() accepts an arg list so this is why I am using ...this.args to spread out the array of args into a list of args
///...turn an array of arguments into a list of arguments
///{args:myArgs} is an object, so it cannot accept ...format
    return Array.prototype.splice.call(this.array,
     ...this.args);}.bind({array:myArray, args:myArgs});

  return runme();
};

//apply() accepts a single array of arguments
fp.spliceApply = function(array, ...args) {
  return Array.prototype.splice.apply(array, args);
};
