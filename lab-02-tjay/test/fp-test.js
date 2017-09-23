'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('map test', () => {
  it('should return [1, 2, 3, 4]', () => {
    expect(fp.map([0, 1, 2, 3], n => n + 1)).toEqual([1, 2, 3, 4]);
  });
  it(`should return ['a.', 'b.', 'c.', 'd.]`, () => {
    expect(fp.map('abcd', n => n + '.')).toEqual(['a.', 'b.', 'c.', 'd.']);
  });
});

describe('filter test', () => {
  it('should return [1, 2, 3]', () => {
    expect(fp.filter([1, 11, 2, 22, 3, 33], n => n < 10)).toEqual([1, 2, 3]);
  });
  it('should return [1, 2, 3]', () => {
    expect(fp.filter([1, 'one', 2, {}, 3, []], n => !isNaN(parseFloat(n)) && isFinite(n))).toEqual([1, 2, 3]);
  });
});

describe('reduce test', () => {
  it('should return 100', () => {
    expect(fp.reduce([5, 5, 15, 25, 50], [(a, c) => a + c, 0])).toEqual(100);
  });
  it(`should return 'abcd'`, () => {
    expect(fp.reduce(['a', 'b', 'c', 'd'], [(a, c) => a + c, ''])).toEqual('abcd');
  });
});

describe('concat test', () => {
  it('should return [1, 2, 3, 101, 102, 103]', () => {
    expect(fp.concat([1, 2, 3], [101, 102, 103])).toEqual([1, 2, 3, 101, 102, 103]);
  });
  it(`should return [1, 2, 3, 'abc']`, () => {
    expect(fp.concat([1, 2, 3], 'abc')).toEqual([1, 2, 3, 'abc']);
  });
});

describe('splice test', () => {
  it('should return [2,3]', () => {
    expect(fp.splice([1, 2, 3, 4, 5], [1, 2])).toEqual([2,3]);
  });
  it(`should return [1, 2, 3, 'four', 'five']`, () => {
    let arr = [1, 2, 3, 4, 5];
    expect(fp.splice(arr, [3, 4, 'four', 'five'])).toEqual([4, 5]);
    expect(arr).toEqual([1, 2, 3, 'four', 'five']);
  });
});

describe('bind test', () => {
  it('should return [2,3]', () => {
    expect(fp.splice([1, 2], [1, 2])).toEqual([2,3]);
  });
});