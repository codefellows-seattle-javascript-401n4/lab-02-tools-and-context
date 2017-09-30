'use strict';


const fp = require('./lib/fp.js');



let dataArray = process.argv;


function upperCase(){
  let dataUp = fp.mapCall(dataArray, letter => letter.toUpperCase());
  console.log(dataUp);
  return dataUp;
}
upperCase();
