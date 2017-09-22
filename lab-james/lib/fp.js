'use strict';

function mapFun(array, callback){

  return Array.prototype.map.call(array, callback);

}
