'use strict';

const arrayFunctions = require('./lib/fp.js');


let numbers = [1,2,3];
let mapwith = n => n*2;
let reducewith = (prev, curr) => prev + curr;
let concatwith = numbers;
let splicewith = [1, 1, 'heyo'];

for (let functionName in arrayFunctions.map) {
  console.log('map', functionName, arrayFunctions.map[functionName](numbers, mapwith));
}

for (let functionName in arrayFunctions.reduce) {
  console.log('reduce', functionName, arrayFunctions.reduce[functionName](numbers, reducewith));
}

for (let functionName in arrayFunctions.concat) {
  console.log('concat', functionName, arrayFunctions.concat[functionName](numbers, concatwith));
}
//
for (let functionName in arrayFunctions.splice) {
  let newarray = [1,2,3];
  console.log('splice', functionName, arrayFunctions.splice[functionName](newarray, splicewith), newarray);
}
