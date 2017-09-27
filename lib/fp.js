'use strict';

let fp = module.exports = {};

//helper functions

let validNums = function(array){
  let valid = true;
  array.forEach(function(num) {
    if(typeof num !== 'number') valid = false;
  });
  return valid; 
};

// map stuff 

fp.mapCall = (array, callback) => {
  return validNums(array) ? Array.prototype.map.call(array,callback) : null;
};

fp.mapBind = function(array, callback) {
  if(validNums(array)){
    let bindStuff = Array.prototype.map.bind(array);
    return bindStuff(callback);
  } return null;
};

fp.mapApply = (array, callback) => {
  return validNums(array) ? Array.prototype.map.apply(array,callback) : null;
};



// filter stuff

fp.filterCall = (array, callback) => {
  return validNums(array) ? Array.prototype.filter.call(array, callback) : null;
};

fp.filterBind = function(array, callback) {
  if(validNums(array)){
    let bindStuff = Array.prototype.filter.bind(array);
    return bindStuff(callback);
  } return null;
};

fp.filterApply = function(array, callback) {
  return validNums(array) ? Array.prototype.filter.apply(array, callback) : null;
};



// reduce stuff

fp.reduceCall  = function(arr, callback) {
  return validNums(arr) ? Array.prototype.reduce.call(arr, callback) : null;
};

fp.reduceBind = function(array, callback) {
  if(validNums(array)){
    let bindStuff = Array.prototype.reduce.bind(array);
    return bindStuff(callback);
  } return null;
};

fp.reduceApply  = function(arr, callback) {
  return validNums(arr) ? Array.prototype.reduce.apply(arr, callback) : null;
};



// concat stuff

fp.concatCall = function(array, array2) {
  return validNums(array && array2) ? Array.prototype.concat.call(array, array2) : null;
};

fp.concatBind = function(array, array2) {
  if(validNums(array && array2)){
    let bindStuff = Array.prototype.concat.bind(array);
    return bindStuff(array2);
  } return null;
};

fp.concatApply = function(array, array2) {
  return validNums(array && array2) ? Array.prototype.concat.apply(array, array2) : null;
};

  

// splice stuff  

fp.spliceCall = function(array, begin, end) {
  return validNums(array) ? Array.prototype.splice.call(array, begin, end) : null;
};

fp.spliceBind = function(array, begin, end) {
  if(validNums(array)){
    let bindStuff = Array.prototype.splice.bind(array);
    return bindStuff(begin,end);
  } return null;
}

fp.spliceApply = function(array, begin, end) {
  return validNums(array) ? Array.prototype.splice.apply(array, begin, end) : null;
};