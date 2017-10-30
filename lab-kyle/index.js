'use strict';

const fp = require('./lib/fp.js');
// const handler = require('../lib/handler.js');

let capitalize = function(){
  console.log('in function');
  let commandArgs = process.argv.splice(2, process.argv.length);

  if(commandArgs.length === 0){
    return console.log('need more arguments');
  } else {

    console.log('Before Map: ' + commandArgs);
//WHY IS THIS NOT WORKING?

    fp.newMapApply(commandArgs, (arg) => {
      arg.toUpperCase();
      console.log('in map');
    });
    console.log('After Map: ' + commandArgs);
  }
};

capitalize();
