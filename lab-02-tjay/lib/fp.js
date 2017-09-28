'use strict';

const fp = module.exports = {};

fp.map = (array, ...args) => Array.prototype.map.call(array, ...args);

fp.filter = (array, ...args) => Array.prototype.filter.call(array, ...args);

fp.reduce = (array, ...args) => Array.prototype.reduce.apply(array, ...args);

fp.concat = (array, ...args) => Array.prototype.concat.call(array, ...args);

fp.splice = (array, ...args) => Array.prototype.splice.apply(array, ...args);
