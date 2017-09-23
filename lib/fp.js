'use strict';

const fp = module.exports = {};

fp.mapCall = (list, callback) => {
  return Array.prototype.map.call(list, callback);
};

fp.mapApply = (list, callback) => {
  return Array.prototype.map.apply(list, [callback]);
};

//ask why arrow function does not work 
fp.mapBind = function (n, cb)  {
  return function () {
    return Array.prototype.map.call(this.n, this.cb);
  }.bind( { n:n, cb:cb  } )();
};

fp.filterCall = (list, callback) => {
  return Array.prototype.filter.call(list, callback);
};

fp.filterApply = (list, callback) => {
  return Array.prototype.filter.apply(list, [callback]);
};

fp.filterBind = function (n, f) {
  return function () {
    return Array.prototype.filter.call(this.n, this.f);
  }.bind( { n:n, f:f } )();
};

fp.concatCall = (list, ...concatArr) => {
  return Array.prototype.concat.call(list, ...concatArr);
};

fp.concatApply = (list, ...concatArr) => {
  return Array.prototype.concat(list, ...concatArr);
};

fp.concatBind = function (v1, v2, ...vn) {
  return function () {
    return Array.prototype.concat(this.v1, this.v2, this.vn);
  }.bind( { v1:v1, v2:v2, vn:vn  } )();
};

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