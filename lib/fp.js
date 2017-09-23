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

fp.mapBind = (array, callback) => {
    if(validNums(array)){
        let bindStuff = Array.prototype.map.bind(array);
        return bindStuff(callback);
    } return null;
};

fp.mapApply = (array, callback) => {
    return validNums(array) ? Array.prototype.map.apply(array,callback) : null;
};

// filter stuff

fp.filterCall = function(array, callback) {
    return validNums(array) ? Array.prototype.filter.call(array, callback) : null;
  };

  fp.filterBind = function(array, callback) {
    if(validNums(array)){
        let bindStuff = Array.prototype.filter.bind(array);
        return bindStuff(callback);
    } return null
  };

  fp.filterApply = function(array, callback) {
    return validNums(array) ? Array.prototype.filter.apply(array, callback) : null;
  };
