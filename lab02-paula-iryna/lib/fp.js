'use strict';
const fp = module.exports = {};


fp.mapCall = function(list, callback) {
  if (!(Array.isArray(list))) return callback('first parameter must be array');
  return Array.prototype.map.call(list, callback);
};

fp.mapApply = function(list, callback) {
  if (!(Array.isArray(callback))) return callback('callback parameter must be an array');
  return Array.prototype.map.apply(list, callback);
};
fp.getMapBoundFunction = function() {
  let obj ={
    n : [2,6,13],
    cb:(a=>a=a+15),
  };
  // Define a function
  let method =function(){
    return Array.prototype.map.call(this.n, this.cb);
  };
  // Bind it
  let mapBound = method.bind(obj);

  // Return bound function
  return mapBound;

};


fp.filterCall = ((list, callback)=> Array.prototype.filter.call(list, callback));
fp.filterApply = ((list, callback)=> Array.prototype.filter.apply(list, callback));
fp.getFilterBoundFunction = function() {
  let obj ={
    n : [2,6,13,20,55],
    cb:(a=>a>15),
  };
  let method =function(){
    return Array.prototype.filter.call(this.n, this.cb);
  };
  let filterBound = method.bind(obj);
  return filterBound;
};


fp.reduceCall = ((list, callback) => Array.prototype.reduce.call(list, callback));
fp.reduceApply = ((list, callback) => Array.prototype.reduce.apply(list, callback));
fp.getReduceBoundFunction = function() {
  let obj ={
    n : [2,6,13,20,55],
    cb:((acc, current)=>acc+current),
  };
  let method =function(){
    return Array.prototype.reduce.call(this.n, this.cb);
  };
  let reduceBound = method.bind(obj);
  return reduceBound;
};


fp.concatCall = ((list1,list2) => Array.prototype.concat.call(list1, list2));
fp.concatApply = ((list1, list2) => Array.prototype.concat.apply(list1, list2));
fp.getConcatBoundFunction = function() {
  let obj ={
    n : [2,6,13,20,55],
    l : ['i','j','k'],
  };
  let method =function(){
    return Array.prototype.concat.call(this.n, this.l);
  };
  let concatBound = method.bind(obj);
  return concatBound;
};


fp.spliceCall = ((list,start) => Array.prototype.splice.call(list, start));
fp.spliceApply = ((list,start) => Array.prototype.splice.apply(list, start));
fp.getSpliceBoundFunction = function() {
  let obj ={
    n : [2,6,13,20,55],
    l : 2,
  };
  let method =function(){
    return Array.prototype.splice.call(this.n, this.l);
  };
  let spliceBound = method.bind(obj);
  console.log(spliceBound());
  return spliceBound;
};
