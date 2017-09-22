'use strict';

let fp = module.exports = {};

fp.map = (array, callback) => {
    return Array.prototype.map.call(array,callback);
};