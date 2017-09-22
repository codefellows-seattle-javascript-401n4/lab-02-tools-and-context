'use strict';

let fp = module.exports = {};

fp.mapCall = (array, callback) => {
    return Array.prototype.map.call(array,callback);
};


fp.mapBind = (array, callback) => {
    let bindStuff = Array.prototype.map.bind(array);
    return bindStuff(callback);
};

fp.mapApply = (array, callback) => {
    
}