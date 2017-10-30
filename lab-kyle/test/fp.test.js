'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

let testArray = [1,2,3,4];
let addThis = [10,11];

//Map

describe('newMapCall', function(){

  it('should multiply the array by two', function(){

    expect(fp.newMapCall(testArray, n => n*2)).toEqual([2,4,6,8]);

  });
});

describe('newMapApply', function(){

  it('should multiply the array by two', function(){

    expect(fp.newMapApply(testArray, n => n*2)).toEqual([2,4,6,8]);

  });
});

describe('newMapBind', function(){

  it('should multiply the array by two', function(){

    expect(fp.newMapBind(testArray, n => n*2)).toEqual([2,4,6,8]);

  });
});

//Filter

describe('newFilterCall', function(){

  it('should return numbers over two', function(){

    expect(fp.newFilterCall(testArray, n => n>2)).toEqual([3,4]);

  });
});

describe('newFilterApply', function(){

  it('should return numbers over two', function(){

    expect(fp.newFilterApply(testArray, n => n>2)).toEqual([3,4]);

  });
});

describe('newFilterBind', function(){

  it('should return numbers over two', function(){

    expect(fp.newFilterBind(testArray, n => n>2)).toEqual([3,4]);

  });
});

//Reduce

describe('newReduceCall', function(){

  it('should add everything in array together', function(){

    expect(fp.newReduceCall(testArray,(acc, num) => acc + num)).toEqual(10);

  });
});

describe('newReduceApply', function(){

  it('should add everything in array together', function(){

    expect(fp.newReduceApply(testArray,(acc, num) => acc + num)).toEqual(10);

  });
});

describe('newReduceBind', function(){

  it('should add everything in array together', function(){

    expect(fp.newReduceBind(testArray,(acc, num) => acc + num)).toEqual(10);

  });
});

//Concat

describe('newConcatCall', function(){

  it('should add to the original array', function(){

    expect(fp.newConcatCall(testArray,addThis)).toEqual([1,2,3,4,10,11]);

  });
});

describe('newConcatApply', function(){

  it('should add to the original array', function(){

    expect(fp.newConcatApply(testArray,addThis)).toEqual([1,2,3,4,10,11]);

  });
});

describe('newConcatBind', function(){

  it('should add to the original array', function(){

    expect(fp.newConcatBind(testArray,addThis)).toEqual([1,2,3,4,10,11]);

  });
});

//Splice

describe('newSpliceCall', function(){

  it('should remove 2 indicies', function(){

    expect(fp.newSpliceCall(testArray,1,2)).toEqual([2,3]);

  });
});

describe('newSpliceApply', function(){

  it('should remove 2 indicies', function(){

    expect(fp.newSpliceApply(testArray,0,2)).toEqual([1,4]);

  });
});

describe('newSpliceBind', function(){

  it('should return empty', function(){

    expect(fp.newSpliceBind(testArray,0,0)).toEqual([]);

  });
});
