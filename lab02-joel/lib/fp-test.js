'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('The map test', () => {
  it('This should return [1, 2, 3, 4]', () => {
    expect(fp.map([0, 1, 2, 3], n => n + 1)).toEqual([1, 2, 3, 4]);
  });
  it(`This should return ['a.', 'b.', 'c.', 'd.]`, () => {
    expect(fp.map('abcd', n => n + '.')).toEqual(['a.', 'b.', 'c.', 'd.']);
  });
});

describe('The filter test', () => {
  it('This should return [1, 2, 3]', () => {
    expect(fp.filter([1, 11, 2, 22, 3, 33], n => n < 10)).toEqual([1, 2, 3]);
  });
  it('This should return [1, 2, 3]', () => {
    expect(fp.filter([1, 'one', 2, {}, 3, []], n => !isNaN(parseFloat(n)) && isFinite(n))).toEqual([1, 2, 3]);
  });
});

describe('The reduce test', () => {
  it('This should return 100', () => {
    expect(fp.reduce([5, 5, 15, 25, 50], [(a, c) => a + c, 0])).toEqual(100);
  });
  it(`This should return 'abcd'`, () => {
    expect(fp.reduce(['a', 'b', 'c', 'd'], [(a, c) => a + c, ''])).toEqual('abcd');
  });
});

describe('The concat test', () => {
  it('This should return [1, 2, 3, 101, 102, 103]', () => {
    expect(fp.concat([1, 2, 3], [101, 102, 103])).toEqual([1, 2, 3, 101, 102, 103]);
  });
  it(`This should return [1, 2, 3, 'abc']`, () => {
    expect(fp.concat([1, 2, 3], 'abc')).toEqual([1, 2, 3, 'abc']);
  });
});

describe('The splice test', () => {
  it('This should return [2,3]', () => {
    expect(fp.splice([1, 2, 3, 4, 5], [1, 2])).toEqual([2,3]);
  });
  it(`This should return [1, 2, 3, 'four', 'five']`, () => {
    let arr = [1, 2, 3, 4, 5];
    expect(fp.splice(arr, [3, 4, 'four', 'five'])).toEqual([4, 5]);
    expect(arr).toEqual([1, 2, 3, 'four', 'five']);
  });
});