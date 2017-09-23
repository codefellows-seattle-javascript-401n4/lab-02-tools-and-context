'use strict';

const fp = module.exports = {};

fp.mapCall = (list, callback) => {
  return Array.prototype.map.call(list, callback);
};

fp.mapApply = (list, callback) => {
  return Array.prototype.map.apply(list, [callback]);
};

let numbers = [4,8,12,16];
let myCallback = n => n*3;
//ask why arrow function does not work 
fp.mapBind = function ()  {
  return Array.prototype.map.call(this.n, this.cb);
}.bind( { n: numbers, cb:myCallback  } );

fp.filterCall = (list, callback) => {
  return Array.prototype.filter.call(list, callback);
};

fp.filterApply = (list, callback) => {
  return Array.prototype.filter.apply(list, [callback]);
};

let nums = [11,17,19,25,61];
let myCall = a => a > 18;
fp.filterBind = function () {
  return Array.prototype.filter.call(this.n, this.cb);
}.bind( {n: nums, cb: myCall } );

fp.concatCall = (list, ...concatArr) => {
  return Array.prototype.concat.call(list, ...concatArr);
};

fp.concatApply = (list, ...concatArr) => {
  return Array.prototype.concat(list, ...concatArr);
};

let concatArr = ([1,2,3,4,'a.','b.',[7,11],'Seahawks']);
fp.concatBind = function () {
  return Array.prototype.concat(this.x);
}.bind( { x: concatArr } );

fp.reduceCall = (sum, acc, startNum) => {
  return Array.prototype.reduce.call(sum, acc, startNum);
};

fp.reduceApply = (sum, acc, startNum) => {
  return Array.prototype.reduce.apply(sum, [acc], startNum);
};

fp.reduceBind = function (s, a, sn) {
  return function (){
    return Array.prototype.reduce.call(this.s, this.a, this.sn);
  }.bind({ s:s, a:a, sn:sn })();
};

fp.spliceCall = (list, ...myFish) => {
  return Array.prototype.splice.call(list, ...myFish);
};

fp.spliceApply = (list, ...myFish) => {
  return Array.prototype.splice.apply(list, ...[myFish]);
};


fp.spliceBind = function (f, a, ...n) {
  return function () {
    return Array.prototype.splice.call(this.f, this.a, this.n);
  }.bind({ f:f, a:a, n:n })();
};