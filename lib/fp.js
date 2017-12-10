'use strict';



const fp = module.exports = {};



fp.mapCall = function(list, callback) {
  return Array.prototype.map.call(list, callback);
};



fp.mapApply = function(list, callback) {
  return Array.prototype.map.apply(list, [callback]);
};



fp.mapBind = function(n, cb) {
  return function() {
    return Array.prototype.map.call(this.n, this.cb);
  }.bind({ n:n, cb : cb })();
};



fp.filterCall = function(list, callback) {
  return Array.prototype.filter.call(list, callback);
};



fp.filterApply = function(list, callback) {
  return Array.prototype.filter.apply(list, [callback]);
};



fp.filterBind = function(n, f) {
  return function() {
    return Array.prototype.filter.call(this.n, this.f);
  }.bind({ n:n, f:f })();
};



fp.reduceCall = (sum, acc, startNum) => {
  return Array.prototype.reduce.call(sum, acc, startNum);
};



fp.reduceApply = (sum, acc, startNum) => {
  return Array.prototype.reduce.apply(sum, [acc], startNum);
};



fp.reduceBind = function (sum, acc, startNum) {
  return function() {
    return Array.prototype.reduce.call(this.sum, this.acc, this.startNum);
  }.bind({ sum:sum, acc:acc, startNum:startNum })();
};



fp.spliceCall = (list, ...myDog) => {
  return Array.prototype.splice.call(list, ...myDog);
};



fp.spliceApply = (list, ...myDog) => {
  return Array.prototype.splice.apply(list, ...[myDog]);
};



fp.spliceBind = function(f, a, ...n) {
  return function() {
    return Array.prototype.splice.call(this.f, this.a, this.n);
  }.bind({ f:f, a:a, n:n })();
};


fp.concatCall = (list, ...concatArray) => {
  return Array.prototype.concat.call(list, ...concatArray);
};



fp.concatApply = (list, ...concatArray) => {
  return Array.prototype.concat(list, ...concatArray);
};



fp.concatBind = function(v1, v2, ...vn) {
  return function() {
    return Array.prototype.concat(this.v1, this.v2, this.vn);
  }.bind({ v1:v1, v2:v2, vn:vn })();
};
