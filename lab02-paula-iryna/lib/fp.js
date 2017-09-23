'use strict';
const fp = module.exports = {};

fp.mapCall = ((list, callback) => Array.prototype.map.call(list, callback));
fp.mapApply = ((list, callback) => Array.prototype.map.apply(list, callback));

fp.getMapBoundFunction = function() {
  let obj ={
    n : [2,6,13,20,55],
    cb:(a=>a>15),
  };
  // Define a function
  let method =function(){
    return Array.prototype.filter.call(this.n, this.cb);
  };
  // Bind it
  let mapBound = method.bind(obj);

  // Return bound function
  return mapBound;
  //console.log( mapBound);
};


fp.filterCall = ((list, callback)=> Array.prototype.filter.call(list, callback));
fp.filterApply = ((list, callback)=> Array.prototype.filter.apply(list, callback));


fp.reduceCall = ((list, callback) => Array.prototype.reduce.call(list, callback));
fp.mapApply = ((list, callback) => Array.prototype.reduce.apply(list, callback));
// fp.mapBind =((list, callback) => Array.prototype.filter.call(list, callback)).bind();

fp.spliceCall = ((list,start) => Array.prototype.splice.call(list, start));
fp.spliceApply = ((list,start) => Array.prototype.splice.apply(list, start));
//fp.spliceBind = ((list, start)=> Array.prototype.splice.call(list, start)).bind();

fp.concatCall = ((list1,list2) => Array.prototype.concat.call(list1, list2));
fp.concatApply = ((list1, list2) => Array.prototype.concat.apply(list1, list2));
// fp.concatBind =((list1, list2) => Array.prototype.concat.call(list1, list2)).bind();
