'use strict';

const fp = require('./lib/fp.js');

let input_array = process.argv.splice(2, process.argv.length);

if (input_array.length === 0){
	console.log('please enter node index.js arg1 arg2 arg3... to get a response');
}

let result = fp.map.call(input_array, el => el.toUpperCase())

console.log(result);

return result;