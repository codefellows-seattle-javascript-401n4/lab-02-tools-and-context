'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');
const numbers = [0,2,4];

//checking  all on .map:
describe('mapCall', function() {
  it('should return [2,4,6] when numbers=[0,2,4] and mapwith is a=>a+2', function() {
    let result = fp.mapCall(numbers,a=>a+2);
    expect(result).toEqual([2,4,6]);
  });
});


describe('mapApply', function(){
  it('should return [2,4,6] when numbers=[0,2,4] and rule is [(a=>a+2)]', function(){
    let result = fp.mapApply(numbers,[a=>a+2]);
    expect(result).toEqual([2,4,6]);
  });
});


describe('filterCall', function() {
  it('should return [4] when numbers=[0,2,4] and mapwith is (a=>a>2)', function(){
    let result = fp.filterCall(numbers,(a=>a>2));
    expect(result).toEqual([4]);
  });
});


describe('filterApply', function() {
  it('should return [4] when numbers=[0,2,4] and mapwith is (a=>a>2)', function(){
    let result = fp.filterApply(numbers,[a=>a>2]);
    expect(result).toEqual([4]);
  });
});


describe('reduceCall', function(){
  it('should return 6 when passed [0,2,4]', function(){
    let result = fp.reduceCall(numbers, (acc, current)=>acc+current);
    expect(result).toEqual(6);
  });
});


describe('reduceApply', function(){
  it('should return 6 when passed [0,2,4]', function(){
    let result = fp.reduceApply(numbers, [(acc, current)=>acc+current]);
    expect(result).toEqual(6);
  });
});



describe('concatCall', function(){
  it('should return [0,2,4,a,b] when passed in [0,2,4] and [a,b]', function(){
    let result = fp.concatCall(numbers,['a','b']);
    expect(result).toEqual([0,2,4,'a','b']);
  });
});


describe('concatApply', function(){
  it('should return [0,2,4,a,b] when passed in [0,2,4] and [a,b]', function(){
    let result = fp.concatApply(numbers,['a','b']);
    expect(result).toEqual([0,2,4,'a','b']);
  });
});


describe('spliceCall', function(){
  it('should return [2,4] when passed([0,2,4] and 1', function(){
    let result = fp.spliceCall(numbers,1);
    expect(result).toEqual([2,4]);
  });
});


describe('spliceApply', function(){
  it('should return [2,4] when passed([0,2,4] and 1', function(){
    let result = fp.spliceApply(numbers,[1]);
    expect(result).toEqual([2,4]);
  });
});
