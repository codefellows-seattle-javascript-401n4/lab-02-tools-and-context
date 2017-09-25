'use strict';

const fp = module.exports = {};

// Map Function

fp.newMapCall = function (list, callback){
  return Array.prototype.map.call(list, callback);
};

fp.newMapApply = function (list, callback){
  return Array.prototype.map.apply(list, [callback]);
};

fp.newMapBind = function (){};

// Filter Function

fp.newFilterCall = function (){};

fp.newFilterApply = function (){};

fp.newFilterBind = function (){};

// Reduce Function

fp.newReduceCall = function (){};

fp.newReduceApply = function (){};

fp.newReduceBind = function (){};

// Concat Function

fp.newConcatCall = function (){};

fp.newConcatApply = function (){};

fp.newConcatBind = function (){};

// Splice Function

fp.newSpliceCall = function (){};

fp.newSpliceApply = function (){};

fp.newSpliceBind = function (){};
