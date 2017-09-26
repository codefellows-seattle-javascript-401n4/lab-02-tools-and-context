'use strict';
let num = [1,2,3];

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('Map', function(){
  it('Map multiplies array by 2', function(){
    let result = fp.mapCall(idx => idx * 2, 1,2,3);
    expect(result).toEqual([2,4,6]);
  });

});

describe('Apply', function(){
  it('Map multiplies array by 2', function(){
    let result = fp.mapApply(idx => idx * 2, [1,2,3]);
    expect(result).toEqual([2,4,6]);
  });

});

describe('Bind', function(){
  it('Map multiplies array by 2', function(){
    let result = fp.mapBind([1,2,3], idx => idx * 2);
    expect(result).toEqual([2,4,6]);
  });

});

describe('Call', function(){
  it('Concat arr1 and arr2', function(){
    let result = fp.concatCall([1,2,4,5], [6,7,8,9]);
    expect(result).toEqual([ 1, 2, 4, 5, 6, 7, 8, 9 ]);
  });

});

describe('Bind', function(){
  it('Bind ', function(){
    let result = fp.concatBind([1,2,4,5], [6,7,8,9]);
    expect(result).toEqual([ 1, 2, 4, 5, 6, 7, 8, 9 ]);
  });

});
