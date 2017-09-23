'use strict'

const fp = require('./lib/fp.js');
const index = module.exports = {};

index.main = () => {
  let result = fp.map(process.argv, n => n.toUppercase());
  console.log(result);
  return(result);
};

index.main();