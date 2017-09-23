'use strict';

let functions = module.exports = {};

//Map=============================================================================================

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

//Filter==========================================================================================

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
