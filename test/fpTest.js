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
});
