'use strict';

//map, filter, reduce, concat, and splice

const expect = require('expect');
const assert = require('assert');
const fx = require('../lib/fp.js');

describe('map', function() {

  describe('call', function() {
    it('correctly applied a callback to the array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], foo => foo*2));
    });
    it('returns an array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], foo => foo*2));
    });
  });

  describe('apply', function() {
    it('correctly applied a callback to the array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.applyMap([0, 1, 2, 3], [foo => foo*2]));
    });
    it('returns an array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.applyMap([0, 1, 2, 3], [foo => foo*2]));
    });
  });

  describe('bind', function() {
    it('correctly applied a callback to the array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.bindMap([0, 1, 2, 3], foo => foo*2));
    });
    it('returns an array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.bindMap([0, 1, 2, 3], foo => foo*2));
    });
  });
});
//
//
// describe('filter', function() {
//
//   describe('call', function() {
//     it('correctly applied a callback to the array', function() {
//       assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], foo => foo*2));
//     });
//   });
//
//   describe('apply', function() {
//     it('correctly applied a callback to the array', function() {
//       assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], [foo => foo*2]));
//     });
//   });
//
//   describe('bind', function() {
//     it('correctly applied a callback to the array', function() {
//       assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], foo => foo*2), [0, 2, 4, 6]);
//     });
//   });
// });

// describe('reduce', function() {
//
//   describe('call', function() {
//     it('correctly applied a callback to the array', function() {
//       assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], foo => foo*2));
//     });
//   });
//
//   describe('apply', function() {
//     it('correctly applied a callback to the array', function() {

//
// describe('filter', function() {
//
//   describe('call', function() {
//     it('correctly applied a callback to the array', function() {
//       assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], foo => foo*2));
//     });
//   });
//
//   describe('apply', function() {
//     it('correctly applied a callback to the array', function() {
//       assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], [foo => foo*2]));
//     });
//   });
//
//   describe('bind', function() {
//     it('correctly applied a callback to the array', function() {
//       assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], foo => foo*2), [0, 2, 4, 6]);
//     });
//   });
// });
//
// describe('reduce', function() {
//
//   describe('call', function() {
//       assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], [foo => foo*2]));
//     });
//   });
//
//   describe('bind', function() {
//     it('correctly applied a callback to the array', function() {
//       assert.deepEqual([0, 2, 4, 6], fx.callMap([0, 1, 2, 3], foo => foo*2), [0, 2, 4, 6]);
//     });
//   });
// });

describe('concat', function() {

  describe('call', function() {
    it('correctly joins two arrays', function() {
      assert.deepEqual([0, 2, 4, 6], fx.callConcat([0, 2], [4, 6]));
    });
    it('returns an array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.callConcat([0, 2], [4, 6]));
    });
  });

  describe('apply', function() {
    it('correctly joins two arrays', function() {
      assert.deepEqual([0, 2, 4, 6], fx.callConcat([0, 2], [4, 6]));
    });
    it('returns an array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.callConcat([0, 2], [4, 6]));
    });
  });

  describe('bind', function() {
    it('correctly joins two arrays', function() {
      assert.deepEqual([0, 2, 4, 6], fx.callConcat([0, 2], [4, 6]));
    });
    it('returns an array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.callConcat([0, 2], [4, 6]));
    });
  });
});

describe('splice', function() {

  describe('call', function() {
    it('accepts an array as an argument', function() {
      assert.deepEqual([0], fx.callSplice([0, 1, 2, 3], 0));
    });
    it('returns an array', function() {
      assert.deepEqual([0], fx.callSplice([0, 1, 2, 3], 0));
    });
  });

  describe('apply', function() {
    it('correctly applied a callback to the array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.applySplice([0, 1, 2, 3], [foo => foo*2]));
    });
  });

  describe('bind', function() {
    it('correctly applied a callback to the array', function() {
      assert.deepEqual([0, 2, 4, 6], fx.bindSpliace([0, 1, 2, 3], foo => foo*2), [0, 2, 4, 6]);

    });
  });
});
