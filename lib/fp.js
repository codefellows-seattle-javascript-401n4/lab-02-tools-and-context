'use strict';

//create stand alone map, filter, reduce, concat, and splice using call, bind, and apply
//the standlone functions should have the signature (array, ...args) => array
let arrayFunctions = {};
//map
//call
arrayFunctions.arrayCall = function(method){
  let mapping = function(array, callback){
    return Array.prototype[method].call(array, callback);
  };
  return mapping;
};
arrayFunctions.mapCall = arrayFunctions.arrayCall('map');
arrayFunctions.reduceCall = arrayFunctions.arrayCall('reduce');
arrayFunctions.concatCall = arrayFunctions.arrayCall('concat');
arrayFunctions.spliceCall = arrayFunctions.arrayCall('splice');
//bind
arrayFunctions.arrayBind = function(method){
  let binding = function(array, callback){
    let doit = Array.prototype[method].bind(array, callback);
    return doit();
  };
  return binding;
};
arrayFunctions.mapBind = arrayFunctions.arrayBind('map');
arrayFunctions.reduceBind = arrayFunctions.arrayBind('reduce');
arrayFunctions.concatBind = arrayFunctions.arrayBind('concat');
arrayFunctions.spiceBind = arrayFunctions.arrayBind('splice');

arrayFunctions.arrayApply = function(method){
  let applying = function(array, callback){
    return Array.prototype[method].apply(array, [callback]);
  };
  return applying;
};

arrayFunctions.mapApply = arrayFunctions.arrayApply('map');
arrayFunctions.reduceApply = arrayFunctions.arrayApply('reduce');
arrayFunctions.concatApply = arrayFunctions.arrayApply('concat');
arrayFunctions.spiceApply = arrayFunctions.arrayApply('splice');

module.exports = arrayFunctions;
