'use strict';


const fp = require('../lib/fp.js');
const expect = require('expect');


describe('map test', () => {
  it('should return [3,6,9]', () => {
    let result = fp.mapCall([1,2,3], n => n * 3);
    expect(result).toEqual([3,6,9]);
  });
  it('should return [5,10,20]', () => {
    let result = fp.mapApply([1,2,4], n => n * 5);
    expect(result).toEqual([5,10,20]);
  });
  it('should return [4,7,10]', () => {
    let result = fp.mapBind([1,4,7], n => n + 3);
    expect(result).toEqual([4,7,10]);
  });
});

describe('filter test', () => {
  it('should return [1,2,3]', () => {
    let result = fp.filterCall([2,4,5], n => n > 3);
    expect(result).toEqual([4,5]);
  });
  it('should return [2,3,4]', () => {
    let result = fp.filterApply([3,4,5], n => n < 1);
    expect(result).toEqual([]);
  });
  it('should return [20,40,60]', () => {
    let result = fp.filterBind([5,10,15,20,40,60], n => n > 16);
    expect(result).toEqual([20,40,60]);
  });
});

describe('reduce test', () => {
  it('should return 9', () => {
    let result = fp.reduceCall([2,3,4], (acc,cur) => acc + cur);
    expect(result).toEqual(9);
  });
  it('should return 54', () => {
    let result = fp.reduceApply([10,10,34],(acc,cur) => acc + cur);
    expect(result).toEqual(54);
  });
  it('should return 19', () => {
    let result = fp.reduceBind([9,9,1], (acc,cur) => acc + cur);
    expect(result).toEqual(19);
  });
});

describe('concat test', () => {
  it('should return 1,2,-5', () => {
    let result = fp.concatCall([1,2], - 5);
    expect(result).toEqual([1,2,-5]);
  });
  it('should return 3,4,10', () => {
    let result = fp.concatApply([3,4], 10);
    expect(result).toEqual([3,4,10]);
  });
  it('should return 5,5,5', () => {
    let result = fp.concatBind([5,5], 5);
    expect(result).toEqual([5,5,5]);
  });
});
