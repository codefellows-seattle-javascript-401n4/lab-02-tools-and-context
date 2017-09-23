'use strict';

let functions = module.exports = {};

functions.mapCall = function(array, callback){

  return Array.prototype.map.call(array, callback);

};

functions.mapApply = function(array, callback){

  return Array.prototype.map.apply();
  
};
