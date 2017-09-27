'use strict';
let num = [1,2,3];

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('Map Call', function(){
  it('Map multiplies array by 2', function(){
    let result = fp.mapCall(idx => idx * 2, 1,2,3);
    expect(result).toEqual([2,4,6]);
  });

});

describe('Map Apply', function(){
  it('Map multiplies array by 2', function(){
    let result = fp.mapApply(idx => idx * 2, [1,2,3]);
    expect(result).toEqual([2,4,6]);
  });

});

describe('Map Bind', function(){
  it('Map multiplies array by 2', function(){
    let result = fp.mapBind([1,2,3], idx => idx * 2);
    expect(result).toEqual([2,4,6]);
  });

});

describe('Concat Call', function(){
  it('Concat arr1 and arr2', function(){
    let result = fp.concatCall([1,2,4,5], [6,7,8,9]);
    expect(result).toEqual([ 1, 2, 4, 5, 6, 7, 8, 9 ]);
  });

});

describe('Concat Bind', function(){
  it('Cancat arr 1 and arr 2 ', function(){
    let result = fp.concatBind([1,2,4,5], [6,7,8,9]);
    expect(result).toEqual([ 1, 2, 4, 5, 6, 7, 8, 9 ]);
  });

});

describe('Concat Apply', function(){
  it('Concat arr1 and arr2', function(){
    let result = fp.concatApply([1,2,4,5], [6,7,8,9]);
    expect(result).toEqual([ 1, 2, 4, 5, 6, 7, 8, 9 ]);
  });
});

describe('Filter Call', function(){
  it('Filter through an array to only show numbers less than 3 ', function(){
    let result = fp.filterCall([1,2,3,4], num => num < 3);
    expect(result).toEqual([1, 2]);
  });
});

describe('Filter Apply', function(){
  it('Filter through an array to only show numbers less than 3 ', function(){
    let result = fp.filterApply([1,2,3,4], num => num < 3);
    expect(result).toEqual([1, 2]);
  });
});

describe('Filter Bind', function(){
  it('Filter through an array to only show numbers less than 3 ', function(){
    let result = fp.filterBind([1,2,3,4], num => num < 3);
    expect(result).toEqual([1, 2]);
  });
});

describe('Reduce Call', function(){
  it('Reduce an array to get value of 10 ', function(){
    let result = fp.reduceCall([1,2, 3, 4],(acc, num) => (acc + num));
    expect(result).toEqual(10);
  });
});

describe('Reduce Apply', function(){
  it('Reduce an array to get value of 10 ', function(){
    let result = fp.reduceApply([1,2, 3, 4],(acc, num) => (acc + num));
    expect(result).toEqual(10);
  });
});

describe('Reduce Bind', function(){
  it('Reduce an array to get value of 10 ', function(){
    let result = fp.reduceBind([1,2, 3, 4],(acc, num) => (acc + num));
    expect(result).toEqual(10);
  });
});
