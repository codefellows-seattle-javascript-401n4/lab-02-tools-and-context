'use strict';
const fp = module.exports = {};

fp.mapCall = ((list, callback) => Array.prototype.map.call(list, callback));
fp.mapApply = ((list, callback) => Array.prototype.map.apply(list, callback));
// fp.mapBind = function(list, callback){
//   let method = function(list, callback) {
//     return Array.prototype.filter.call(this.n, this.cb);};
//   let obj = {n:numbers, cb:mapwith};
//   return method.bind(obj);
// };

// fp.mapBind =(() => Array.prototype.filter.call(this.n, this.cb)).bind({n:numbers, cb:mapwith});
// console.log(fp.mapBind);
fp.filterCall = ((list, callback)=> Array.prototype.filter.call(list, callback));
fp.filterApply = ((list, callback)=> Array.prototype.filter.apply(list, callback));
// fp.filterBind = ((list, callback)=> Array.prototype.filter.call(list, callback).bind());

fp.reduceCall = ((list, callback) => Array.prototype.reduce.call(list, callback));
fp.mapApply = ((list, callback) => Array.prototype.ma.apply(list, callback));
// fp.mapBind =((list, callback) => Array.prototype.filter.call(list, callback)).bind();

fp.spliceCall = ((list,start) => Array.prototype.splice.call(list, start));
fp.spliceApply = ((list,start) => Array.prototype.splice.apply(list, start));
//fp.spliceBind = ((list, start)=> Array.prototype.splice.call(list, start)).bind();

fp.concatCall = ((list1,list2) => Array.prototype.concat.call(list1, list2));
fp.concatApply = ((list1, list2) => Array.prototype.concat.apply(list1, list2));
// fp.concatBind =((list1, list2) => Array.prototype.concat.call(list1, list2)).bind();
