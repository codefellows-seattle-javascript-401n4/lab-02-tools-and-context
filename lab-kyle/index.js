'use strict';

const fp = require('./lib/fp.js');
// const handler = require('../lib/handler.js');

let capitalize = function(){
  let commandArgs = process.argv.splice(2, process.argv.length);

  if(commandArgs.length === 0){
    return console.log('need more arguments');
  } else {
    let upperCased = fp.newMapApply(commandArgs, function(arg) {
      return arg.toUpperCase();
    });
    console.log(upperCased);
  }
};
capitalize();
