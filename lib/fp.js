'use strict';
const fp = module.exports = {};




fp.mapCall = (array,cb) => {
  return Array.prototype.map.call(array,cb);

};

fp.mapApply = (array,cb) => {
  return Array.prototype.map.apply(array,[cb]);
};

fp.mapBind = (array,cb) => {
  let correctValue = Array.prototype.map.bind(array);
  return correctValue(cb);
};

fp.filterCall = (array,cb) => {
  return Array.prototype.filter.call(array,cb);
};

fp.filterApply = (array,cb) => {
  return Array.prototype.filter.apply(array,[cb]);
};

fp.filterBind = (array,cb) => {
  let correctValue = Array.prototype.filter.bind(array);
  return correctValue(cb);
};

fp.reduceCall = (acc,cur) => {
  return Array.prototype.reduce.call(acc,cur);
};

fp.reduceApply = (acc,cur) => {
  return Array.prototype.reduce.apply(acc, [cur]);
};

fp.reduceBind = (acc,cur) => {
  let correctValue = Array.prototype.reduce.bind(acc);
  return correctValue(cur);
};

fp.concatCall = (array,cb) => {
  return Array.prototype.concat.call(array,cb);
};

fp.concatApply = (array,cb) => {
  return Array.prototype.concat.apply(array,[cb]);
};

fp.concatBind = (array,cb) => {
  let correctValue = Array.prototype.concat.bind(array);
  return correctValue(cb);
};
