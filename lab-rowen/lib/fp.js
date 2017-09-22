'use strict';

let allFx = module.exports = {};

allFx.mapCall = function (list, callback) {

  let output = Array.prototype.map.call( list, callback ) || null;

  return output;

};
