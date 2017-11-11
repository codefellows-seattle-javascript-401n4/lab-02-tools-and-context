'use strict';

let fx = module.exports = {};

//////////////////////////////////////////////////////////////////////////
fx.callMap = function (array, cb) {
  return Array.prototype.map.call(array, cb);

};

fx.bindMap = function(array, cb) {
  let helper = Array.prototype.map.bind(array);
  return helper(cb);

};

fx.applyMap = function(array, cb) {
  return Array.prototype.map.apply(array, cb);

};

///////////////////////////////////////////////////////////////////////
fx.callFilter = function(array, cb) {
  return Array.prototype.filter.call(array, cb);

};

fx.bindFilter = function(array, cb){
  let helper = Array.prototype.filter.bind(array);
  return helper(cb);

};

fx.applyFilter = function(array, cb) {
  return Array.prototype.filter.apply(array, cb);

};

//////////////////////////////////////////////////////////////////////////
fx.callReduce = function(array, cb) {
  return Array.prototype.reduce.call(array, cb);
};

fx.bindReduce= function(array, cb){
  let helper = Array.prototype.reduce.bind(array);
  return helper(cb);

};

fx.applyReduce = function(array, cb) {
  return Array.prototype.reduce.apply(array, cb);
};

//////////////////////////////////////////////////////////////////////////

fx.callConcat = function(array1, array2) {
  return Array.prototype.concat.call(array1, array2);
};


fx.bindConcat = function(array1, array2){
  return Array.prototype.concat.bind(array1, array2);

};

fx.applyConcat = function(array1, array2) {
  return Array.prototype.concat.apply(array1, array2);
};
