'use strict';

const fp = module.exports = {};
//map
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

//concat
fp.concatCall = function(num, ...arr){

  return Array.prototype.concat.call(num, ...arr);

};

fp.concatBind = function(arr1, arr2){
  return function(){
    return Array.prototype.concat(this.arr1, this.arr2);
  }.bind({arr1:arr1, arr2:arr2})();

};
fp.concatApply = function(arr1, ...arr){

  return Array.prototype.concat.apply(arr1, ...arr);

};

//filter
fp.filterCall = function(arr, cb){
  return Array.prototype.filter.call(arr, cb);
};

fp.filterApply = function(arr, cb){
  return Array.prototype.filter.apply(arr, [cb]);
};

fp.filterBind = function(arr, cb){
  return function(){
    return Array.prototype.filter.call(this.arr, this.cb);
  }.bind({arr:arr, cb:cb})();
};
//reduce
fp.reduceCall = function(acc, num){
  return Array.prototype.reduce.call(acc,num);
};

fp.reduceApply = function(acc, num){
  return Array.prototype.reduce.apply(acc,[num]);
};

fp.reduceBind = function(acc, num){
  return function(){
    return Array.prototype.reduce.call(this.acc,this.num);
  }.bind({acc:acc, num:num})();
};


// fp.map(idx => console.log(idx.toUpperCase()), process.argv);
