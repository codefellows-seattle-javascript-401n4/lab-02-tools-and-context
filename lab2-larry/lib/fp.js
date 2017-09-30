'use strict';

module.exports = {
  mapCall: function(values){
    if(!Array.isArray(values)) return null;
    return Array.prototype.map.call(values, (i) => i * 2);
  },
  mapApply: function(values){
    if(!Array.isArray(values)) return null;
    return Array.prototype.map.apply(values, [(i) => i * 2]);
  },
  mapBind: function(bool){
    let valuesToUse;
    (bool) ? valuesToUse = this.values : valuesToUse = this.badValues;
    if(!Array.isArray(valuesToUse)) return null;
    return Array.prototype.map.call(valuesToUse, (i) => i * 2);
  }.bind({values: [4, 5, 6], badValues: 'wizard'}),

  reduceCall: function(values){
    if(!Array.isArray(values)) return null;
    return Array.prototype.reduce.call(values, (prev, curr) => prev + curr);
  },
  reduceApply: function(values){
    if(!Array.isArray(values)) return null;
    return Array.prototype.reduce.apply(values, [(prev, curr) => prev + curr]);
  },
  reduceBind: function(bool){
    let valuesToUse;
    (bool) ? valuesToUse = this.values : valuesToUse = this.badValues;
    if(!Array.isArray(valuesToUse)) return null;
    return Array.prototype.reduce.call(valuesToUse, (prev, curr) => prev + curr);
  }.bind({values: [1, 2, 3], badValues: 'Gandolf'}),

  filterCall: function(values){
    if(!Array.isArray(values)) return null;
    return Array.prototype.filter.call(values, (value) => value >= 10);
  },
  filterApply: function(values){
    if(!Array.isArray(values)) return null;
    return Array.prototype.filter.apply(values, [(value) => value >= 10]);
  },
  filterBind: function(bool){
    let valuesToUse;
    (bool) ? valuesToUse = this.values : valuesToUse = this.badValues;
    if(!Array.isArray(valuesToUse)) return null;
    return Array.prototype.filter.call(valuesToUse, (value) => value >= 10);
  }.bind({values: [10, 15, 8, 7, 2, 23, 37], badValues: 'Gandolf'}),

  concatCall: function(arr1, arr2){
    if(!Array.isArray(arr1)) return null;
    if(!Array.isArray(arr2)) return null;
    return Array.prototype.concat.call(arr1, arr2);
  },
  concatApply: function(arr1, arr2){
    if(!Array.isArray(arr1)) return null;
    if(!Array.isArray(arr2)) return null;
    return Array.prototype.concat.apply(arr1, arr2);
  },
  concatBind: function(bool){
    let valuesToUse;
    (bool) ? valuesToUse = this.values : valuesToUse = this.badValues
    if(!Array.isArray(valuesToUse)) return null;
    return Array.prototype.concat.call(valuesToUse, [4, 5, 6]);
  }.bind({values: [1, 2, 3], badValues: '1'}),

  spliceCall: function(arr){
    if(!Array.isArray(arr)) return null;
    return Array.prototype.splice.call(arr, 0, 1);
  },
  spliceApply: function(arr){//couldn't get this to work
    if(!Array.isArray(arr)) return null;
    console.log(arr);
    try{console.log(Array.prototype.splice.apply([1, 2, 3]));
    }
    catch(error){
      console.log(error);
    }
    return Array.prototype.splice.apply(arr, 0, 1);
  },
  spliceBind: function(){
    if(!Array.isArray(arr)) return null;
    return Array.prototype.splice.call(arr, 0, 1);
  }
}
