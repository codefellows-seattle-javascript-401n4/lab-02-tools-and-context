'use strict';

const fp = module.exports = {};

fp.mapCall = function(cb, ...arg){

  return Array.prototype.map.call(arg, cb);

};

let mapCall = fp.mapCall(idx => idx * 2, 1,2,3);
console.log(mapCall);

fp.mapApply = function(cb, arg){

  return Array.prototype.map.apply(arg, [cb]);

};

let mapApply = fp.mapApply(idx => idx * 2, [1,2,3]);
console.log(mapApply);


let mapBind = fp.mapBind = function(num, cb){
  return function(){
    return Array.prototype.map.call(this.num, this.cb);

  }.bind({num:num, cb:cb})();
};
console.log(mapBind);

fp.concatCall = function(num, ...arr){

  return Array.prototype.concat.call(num, ...arr);

};

fp.concatCall = function(num, ...arr){

  return Array.prototype.concat.call(num, ...arr);

};

fp.concatBind = function(arr1, arr2){
  return function(){
    return Array.prototype.concat(this.arr1, this.arr2);
  }.bind({arr1:arr1, arr2:arr2})();

};



// fp.map(idx => console.log(idx.toUpperCase()), process.argv);
