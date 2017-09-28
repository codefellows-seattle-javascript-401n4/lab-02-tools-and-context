'use strict';

const fp = require('../lib/fp.js');
const expect = require("expect");

// describe('Map', function() {
//
//   it('returns double the value of each integer in the array', function() {
//     expect(fp.mapCall([4, 5, 6])).toEqual([8, 10, 12]);
//
//   });
//   it('returns null', function() {
//     expect(fp.mapCall('wizard')).toEqual(null);
//
//   });
//   it('returns double the value of each integer in the array', function() {
//     expect(fp.mapApply([4, 5, 6])).toEqual([8, 10, 12]);
//
//   });
//   it('returns null', function() {
//     expect(fp.mapApply('wizard')).toEqual(null);
//
//   });
//   it('returns double the value of each integer in the array', function() {
//     expect(fp.mapBind(true)).toEqual([8, 10, 12]);
//
//   });
//   it('returns null', function() {
//     expect(fp.mapBind(false)).toEqual(null);
//
//   });
//
// });

// describe('Reduce', function() {
//
//   it('returns the reduced value of the array', function() {
//     expect(fp.reduceCall([1, 2, 3])).toEqual(6);
//
//   });
//   it('returns null', function() {
//     expect(fp.reduceCall('wizard')).toEqual(null);
//
//   });
//   it('returns the reduced value of the array', function() {
//     expect(fp.reduceApply([1, 2, 3])).toEqual(6);
//
//   });
//   it('returns null', function() {
//     expect(fp.reduceApply('wizard')).toEqual(null);
//
//   });
//   it('returns sum value of the array', function() {
//     expect(fp.reduceBind(true)).toEqual(6);
//
//   });
//   it('returns null', function() {
//     expect(fp.reduceBind(false)).toEqual(null);
//
//     });
// });

// describe('Filter', function() {
//
//   it('returns the values of the array that are greater than 10', function() {
//     expect(fp.filterCall([10, 15, 8, 7, 2, 23, 37])).toEqual([10, 15, 23, 37]);
//
//   });
//   it('returns null', function() {
//     expect(fp.filterCall('wizard')).toEqual(null);
//
//   });
//   it('returns the values of the array that are greater than 10', function() {
//     expect(fp.filterApply([10, 15, 8, 7, 2, 23, 37])).toEqual([10, 15, 23, 37]);
//
//   });
//   it('returns null', function() {
//     expect(fp.filterApply('wizard')).toEqual(null);
//
//   });
//   it('returns the values of the array that are greater than 10', function() {
//     expect(fp.filterBind(true)).toEqual([10, 15, 23, 37]);
//
//   });
//   it('returns null', function() {
//     expect(fp.filterBind(false)).toEqual(null);
//
//     });
// });
//
// describe('Concat', function() {
//
//   it('returns arr1 and arr2 merged together', function() {
//     expect(fp.concatCall([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
//
//   });
//   it('returns null', function() {
//     expect(fp.concatCall('wizard')).toEqual(null);
//
//   });
//   it('returns arr1 and arr2 merged together', function() {
//     expect(fp.concatApply([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
//
//   });
//   it('returns null', function() {
//     expect(fp.concatApply('wizard')).toEqual(null);
//
//   });
//   it('returns arr1 and arr2 merged together', function() {
//     expect(fp.concatBind(true)).toEqual([1, 2, 3, 4, 5, 6]);
//
//   });
//   it('returns null', function() {
//     expect(fp.concatBind(false)).toEqual(null);
//
//     });
// });

describe('Splice', function() {

  it('returns first item of array', function() {
    expect(fp.spliceCall([1, 2, 3, 4])).toEqual([1]);

  });
  it('returns null', function() {
    expect(fp.spliceCall('wizard')).toEqual(null);

  });
  it('returns first item of array', function() {
    expect(fp.spliceApply([1, 2, 3, 4])).toEqual([1]);

  });
  it('returns null', function() {
    expect(fp.spliceApply('wizard')).toEqual(null);

  });
  it('returns first two items of array', function() {
    expect(fp.spliceBind(true)).toEqual([1, 2, 3, 4, 5, 6]);

  });
  it('returns null', function() {
    expect(fp.spliceBind(false)).toEqual(null);

    // });
});
