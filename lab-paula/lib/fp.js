'use strict';

const fp = module.exports = {};

// let arr = [ 0, 15, 1 ];
// let arr2 = [ 8, 99];
// let index = 2;
// let current = (prev, curr) => curr + prev;
// let mapwith = n => n+3;
// let filterCriteria = a => a < 13;


//check that input is an array and that elements are numbers
let isValidArray = (input => {
  return (!Array.isArray(input)) ? false :
   input.every(x => {return typeof x === 'number'; });
});

/******  FILTER ******/

fp.filterWithCall = (list, callback) => {
  return isValidArray(list) ? Array.prototype.filter.call(list, callback) : null;
};

fp.filterWithApply = (list, callback) => {
  return isValidArray(list) ? Array.prototype.filter.apply(list, callback) : null;
};

fp.filterWithBind = function(list, callback) {
  if(!isValidArray(list)) return null;
  else {
    let newArray = Array.prototype.filter.bind(list);
    return newArray(callback);
  }
};

/******  MAP ******/

fp.mapWithCall = (list, callback) => {
  return isValidArray(list) ? Array.prototype.map.call(list, callback) : null;
};

fp.mapWithApply = (list, callback) => {
  return isValidArray(list) ? Array.prototype.map.apply(list, callback) : null;
};

fp.mapWithBind = function(list, callback) {
  if(!isValidArray(list)) return null;
  else {
    let newArray = Array.prototype.map.bind(list);
    return newArray(callback);
  }
};

/******  CONCAT ******/

fp.concatWithCall = (list, list2) => {
  return (isValidArray(list) && isValidArray(list2)) ? Array.prototype.concat.call(list, list2) : null;
};

fp.concatWithApply = (list, list2) => {
  return (isValidArray(list) && isValidArray(list2)) ? Array.prototype.concat.apply(list, list2) : null;
};

fp.concatWithBind = function(list, list2) {
  if (!isValidArray(list) || !isValidArray(list2)) return null;
  else {
    let newArray = Array.prototype.concat.bind(list);
    return newArray(list2);
  }
};

/******  SPLICE ******/

fp.spliceWithCall = (list, start) => {
  return isValidArray(list) ? Array.prototype.splice.call(list, start) : null;
};

fp.spliceWithApply = (list, start) => {
  return (isValidArray(list) && isValidArray(start)) ? Array.prototype.splice.apply(list, start) : null;
};

fp.spliceWithBind = function (list, start) {
  if(!isValidArray(list)) return null;
  else {
    let newArray = Array.prototype.splice.bind(list);
    return newArray(start);
  }
};


/******  REDUCE ******/

fp.reduceWithCall = (list, curr) => {
  return isValidArray(list) ? Array.prototype.reduce.call(list, curr) : null;
};

fp.reduceWithApply = (list, curr) => {
  return isValidArray(list) ? Array.prototype.reduce.apply(list, curr) : null;
};

fp.reduceWithBind = function(list, curr) {
  if(!isValidArray(list)) return null;
  else {
    let newArray = Array.prototype.reduce.bind(list);
    return newArray(curr);
  }
};
