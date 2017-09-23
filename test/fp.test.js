'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

// helper arrays & functions

let goodNums = [1,2,3,4,5,6];
let shitNums = [6,9, 'poop'];
let moreNums = [7,8,9];

// map tests

describe('fp.mapCall', function(){
  it('should take the given array and square every number in it', function(){
    expect(fp.mapCall(moreNums, n => n*n)).toEqual([49,64,81]);
  });
});

describe('fp.mapCall', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.mapCall(shitNums, n => n*n)).toBe(null);
  });
});

describe('fp.mapBind', function(){
  it('should take the given array and square every number in it', function(){
    expect(fp.mapBind(moreNums, n => n*n)).toEqual([49,64,81]);
  });
});

describe('fp.mapBind', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.mapBind(shitNums, n => n*n)).toBe(null);
  });
});

describe('fp.mapApply', function(){
  it('should take the given array and square every number in it', function(){
    expect(fp.mapApply(moreNums, [n => n*n])).toEqual([49,64,81]);
  });
});

describe('fp.mapApply', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.mapApply(shitNums, [n => n*n])).toBe(null);
  });
});


// filter tests 

describe('fp.filterCall', function(){
  it('should take an array and return to you just the even numbers', function(){
    expect(fp.filterCall(goodNums, n => n%2 ===0)).toEqual([2,4,6]);
  });
});

describe('fp.filterCall', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.filterCall(shitNums, n => n%2 ===0)).toBe(null);
  });
});

describe('fp.filterBind', function(){
  it('should take an array and return to you just the even numbers', function(){
    expect(fp.filterBind(goodNums, n => n%2 ===0)).toEqual([2,4,6]);
  });
});

describe('fp.filterBind', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.filterBind(shitNums, n => n%2 ===0)).toBe(null);
  });
});

describe('fp.filterApply', function(){
  it('should take an array and return to you just the even numbers', function(){
    expect(fp.filterApply(goodNums, [n => n%2 ===0])).toEqual([2,4,6]);
  });
});

describe('fp.filterApply', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.filterApply(shitNums, [n => n%2 ===0])).toBe(null);
  });
});

// reduce tests

describe('fp.reduceCall', function(){
  it('should take an array and return to you the sum of the numbers', function(){
    expect(fp.reduceCall(goodNums, (acc, num) => acc + num)).toEqual(21);
  });
});

describe('fp.reduceCall', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.reduceCall(shitNums, (acc, num) => acc + num)).toBe(null);
  });
});

describe('fp.reduceBind', function(){
  it('should take an array and return to you the sum of the numbers', function(){
    expect(fp.reduceBind(goodNums, (acc, num) => acc + num)).toEqual(21);
  });
});

describe('fp.reduceBind', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.reduceBind(shitNums, (acc, num) => acc + num)).toBe(null);
  });
});

describe('fp.reduceApply', function(){
  it('should take an array and return to you the sum of the numbers', function(){
    expect(fp.reduceApply(goodNums, [(acc, num) => acc + num])).toEqual(21);
  });
});

describe('fp.reduceApply', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.reduceApply(shitNums, [(acc, num) => acc + num])).toBe(null);
  });
});

// concat tests

describe('fp.concatCall', function(){
  it('should take two arrays and combine them into one array', function(){
    expect(fp.concatCall(goodNums, moreNums)).toEqual([1,2,3,4,5,6,7,8,9]);
  });
});

describe('fp.concatCall', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.concatCall(goodNums, shitNums)).toBe(null);
  });
});

describe('fp.concatBind', function(){
  it('should take two arrays and combine them into one array', function(){
    expect(fp.concatBind(goodNums, moreNums)).toEqual([1,2,3,4,5,6,7,8,9]);
  });
});

describe('fp.concatBind', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.concatBind(goodNums, shitNums)).toBe(null);
  });
});

describe('fp.concatApply', function(){
  it('should take two arrays and combine them into one array', function(){
    expect(fp.concatApply(goodNums, moreNums)).toEqual([1,2,3,4,5,6,7,8,9]);
  });
});

describe('fp.concatApply', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.concatApply(goodNums, shitNums)).toBe(null);
  });
});

// splice tests

describe('fp.spliceCall', function(){
  it('should give just the first 3 index items of an array', function(){cd
    expect(fp.spliceCall([1,2,3,4,5,6], 0, 3)).toEqual([1,2,3]);
  });
});

describe('fp.spliceCall', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.spliceCall(shitNums, 0, 3)).toBe(null);
  });
});


describe('fp.spliceBind', function(){
  it('should give just the first 3 index items of an array', function(){
    expect(fp.spliceBind([1,2,3,4,5,6], 0, 3)).toEqual([1,2,3]);
  });
});

describe('fp.spliceBind', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.spliceBind(shitNums, 0, 3)).toBe(null);
  });
});

describe('fp.spliceApply', function(){
  it('should give just the first 3 index items of an array', function(){
    expect(fp.spliceApply([1,2,3,4,5,6], [0, 3])).toEqual([1,2,3]);
  });
});

describe('fp.spliceApply', function(){
  it('should return null if the array given isn\'t all numbers', function(){
    expect(fp.spliceApply(shitNums, [0, 3])).toBe(null);
  });
});
