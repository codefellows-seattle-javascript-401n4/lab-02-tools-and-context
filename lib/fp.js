'use strict';

//create stand alone map, filter, reduce, concat, and splice using call, bind, and apply
//the standlone functions should have the signature (array, ...args) => array
let arrayFunctions = {};
arrayFunctions.map = {};
arrayFunctions.reduce = {};
arrayFunctions.concat = {};
arrayFunctions.splice = {};

//call
function arrayCall(method, isArgsArray){
  let mapping = function(array, callback){
    let params = callback;
    let doit;
    if (isArgsArray) {
      doit = Array.prototype[method].call(array, ...params);
    } else {
      doit = Array.prototype[method].call(array, params);
    }
    return doit;
  };
  return mapping;
}

arrayFunctions.map.caller = arrayCall('map');
arrayFunctions.reduce.caller = arrayCall('reduce');
arrayFunctions.concat.caller = arrayCall('concat');
arrayFunctions.splice.caller = arrayCall('splice', true);

//bind
function arrayBind(method, isArgsArray){
  let binding = function(array, callback){
    let params = callback;
    let doit;
    if (isArgsArray) {
      doit = Array.prototype[method].bind(array, ...params);
    } else {
      doit = Array.prototype[method].bind(array, params);
    }
    return doit();
  };
  return binding;
}

arrayFunctions.map.binder = arrayBind('map');
arrayFunctions.reduce.binder = arrayBind('reduce');
arrayFunctions.concat.binder = arrayBind('concat');
arrayFunctions.splice.binder = arrayBind('splice', true);


function arrayApply(method, isArgsArray){
  let applying = function(array, callback){
    let params;
    if (isArgsArray) {
      params = callback;
    } else {
      params = [callback];
    }
    return Array.prototype[method].apply(array, params);
  };
  return applying;
}

arrayFunctions.map.applier = arrayApply('map');
arrayFunctions.reduce.applier = arrayApply('reduce');
arrayFunctions.concat.applier = arrayApply('concat');
arrayFunctions.splice.applier = arrayApply('splice', true);

module.exports = arrayFunctions;
