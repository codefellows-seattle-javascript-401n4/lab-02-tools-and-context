'use strict';

const fp = require('./lib/fp.js');

let upper = module.exports = () => {
  let list = fp.spliceCall(process.argv, 2);

  list = fp.mapCall(list, word => word.toUpperCase());
  let result = list.join(' ');
  console.log(result);
  return result;

};

upper();

