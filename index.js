'use strict';

const fp = require('./lib/fp.js');

let input_array = process.argv.splice(2, process.argv.length);

let result = fp.map.call(input_array, el => el.toUpperCase())

console.log(result);

return result;