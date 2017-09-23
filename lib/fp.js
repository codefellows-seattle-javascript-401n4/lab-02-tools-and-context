'use strict';

const fp = module.exports = {};

fp.map = function(cb, ...arg){

  Array.prototype.map.call(arg, cb);
};

fp.map(idx => idx * 2, 1,2,3);

// function timesTwo(idx){
//   return idx * 2
// }
// fp.map(idx => idx * 2, 1,2,3);

// fp.map(idx => console.log(idx.toUpperCase()), process.argv);
