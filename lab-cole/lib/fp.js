'use strict';

const fp = module.exports = {};

//Map functions with Call, Bind, and Apply
fp.mapCall = (arr, cb) => {
  return Array.prototype.map.call(arr, cb);
};

fp.mapBind = (arr, cb) => {
  let array = Array.prototype.map.bind(arr);
  return array(cb);
};

fp.mapApply = (arr, cb) => {
  return Array.prototype.map.apply(arr, [cb]);
};


//Filter functions with Call, Bind, and Apply
fp.filterCall = (arr, cb) => {
  return Array.prototype.filter.call(arr, cb);
};

fp.filterBind = (arr, cb) => {
  let array = Array.prototype.filter.bind(arr);
  return array(cb);
};

fp.filterApply = function (arr, cb) {
  return Array.prototype.filter.apply(arr, [cb]);
};


//Reduce functions with Call, Bind, and Apply
fp.reduceCall = function (arr, cb) {
  return Array.prototype.reduce.call(arr, cb);
};

fp.reduceBind = function (arr, cb) {
  let array = Array.prototype.reduce.bind(arr);
  return array(cb);
};

fp.reduceApply = function (arr, cb) {
  return Array.prototype.reduce.apply(arr, [cb]);    
};


//Concat functions with Call, Bind, and Apply
fp.concatCall = function (arr, cb) {
  return Array.prototype.concat.call(arr, cb);
};

fp.concatBind = function (arr, cb) {
  let array = Array.prototype.concat.bind(arr);
  return array.concat(cb);
};

fp.concatApply = function (arr, cb) {
  return Array.prototype.concat.apply(arr, [cb]);
};


//Splice functions with Call, Bind, and Apply
fp.spliceCall = function (arr, args) {
  return Array.prototype.splice.call(arr, ...args);
};

fp.spliceBind = function (arr, args) {
  let array = Array.prototype.splice.bind(arr);
  return array(args);
};

fp.spliceApply = function (arr, args) {
  return Array.prototype.splice.apply(arr, [args]);
};