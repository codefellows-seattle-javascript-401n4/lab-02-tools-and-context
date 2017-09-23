'use strict';

const expect = require('expect');
const fp = require('../lib/fp.js');

describe('map using call', () => {
  it('shoud return [ 12, 24, 36, 48 ]', () => {
    expect(fp.mapCall([4, 8, 12, 16], n => n * 3)).toEqual([12, 24, 36, 48]); 
  });
});

describe('map using apply', () => {
  it('should return [ 12, 24, 36, 48 ]', () => {
    expect(fp.mapApply([4, 8, 12, 16], n => n * 3)).toEqual([ 12, 24, 36, 48]);
  });
});

describe('map using bind', () => {
  it('should return [ 12, 24, 36, 48 ]', () => {
    expect(fp.mapBind([4, 8, 12, 16], n => n * 3)).toEqual([ 12, 24, 36, 48]);
  });
});


describe('filter using call', () => {
  it('should return [19,25,61]', () => {
    expect(fp.filterCall([11,17,19,25,61], a => a > 18)).toEqual([19,25,61]);
  });
});

describe('filter using apply', () => {
  it('should reuturn [19,25,61]', () => {
    expect(fp.filterApply([11,17,19,25,61], a => a > 18)).toEqual([19,25,61]);
  });
});

describe('filter using bind', () => {
  it('should reuturn [19,25,61]', () => {
    expect(fp.filterBind([11,17,19,25,61], a => a > 18)).toEqual([19,25,61]);
  });
});

describe('concat using call', () => {
  it('should return [1,2,3,4,\'a.\',\'b.\',[7,11],\'Seahawks]', () => {
    expect(fp.concatCall([1,2,3,4], ['a.','b.',[7, 11]], 'Seahawks')).toEqual([1,2,3,4,'a.','b.',[7,11],'Seahawks']);
  });
});

describe('concat using apply', () => {
  it('should return [1,2,3,4,\'a.\',\'b.\',[7,11],\'Seahawks]', () => {
    expect(fp.concatApply([1,2,3,4], ['a.','b.',[7, 11]], 'Seahawks')).toEqual([1,2,3,4,'a.','b.',[7,11],'Seahawks']);
  });
});

describe('concat using bind', () => {
  it('should return [1,2,3,4,\'a.\',\'b.\',[7,11],\'Seahawks]', () => {
    expect(fp.concatBind([1,2,3,4], ['a.','b.',[7, 11]], 'Seahawks')).toEqual([1,2,3,4,'a.','b.',[7,11],'Seahawks']);
  });
});

describe('reduce using call', () => {
  it('should return 20', () => {
    expect(fp.reduceCall([2,4,6,8], (a,c) => a + c, 0)).toEqual(20);
  });
});

describe('reduce using apply', () => {
  it('should return 20', () => {
    expect(fp.reduceApply([2,4,6,8], (a,c) => a + c, 0)).toEqual(20);
  });
});

describe('reduce using bind', () => {
  it('should return 20', () => {
    expect(fp.reduceBind([2,4,6,8], (a,c) => a + c, 0)).toEqual(20);
  });
});

describe('splice using call', () => {
  it('should return ["mandarin"]', () => {
    expect(fp.spliceCall(['angel', 'clown', 'mandarin', 'sturgeon'], 2, 1)).toEqual(['mandarin']);
  });
  it('should return ["clown", "mandarin"]', () => {
    expect(fp.spliceCall(['angel', 'clown', 'mandarin', 'sturgeon'], 1, 2)).toEqual(['clown', 'mandarin']);
  });
  it('should return []', () => {
    expect(fp.spliceCall(['angel', 'clown', 'mandarin', 'sturgeon'], 2, 0, 'trumpet', 'anemone')).toEqual([]);
  });
});

describe('splice using apply', () => {
  it('should return ["mandarin"]', () => {
    expect(fp.spliceApply(['angel', 'clown', 'mandarin', 'sturgeon'], 2, 1)).toEqual(['mandarin']);
  });
  it('should return ["clown", "mandarin"]', () => {
    expect(fp.spliceApply(['angel', 'clown', 'mandarin', 'sturgeon'], 1, 2)).toEqual(['clown', 'mandarin']);
  });
  it('should return []', () => {
    expect(fp.spliceApply(['angel', 'clown', 'mandarin', 'sturgeon'], 2, 0, 'trumpet', 'anemone')).toEqual([]);
  });
});

describe('splice using bind', () => {
  it('should return ["mandarin"]', () => {
    expect(fp.spliceBind(['angel', 'clown', 'mandarin', 'sturgeon'], 2, 1)).toEqual(['mandarin']);
  });
  it('should return ["clown", "mandarin"]', () => {
    expect(fp.spliceBind(['angel', 'clown', 'mandarin', 'sturgeon'], 1, 2)).toEqual(['clown', 'mandarin']);
  });
  it('should return []', () => {
    expect(fp.spliceBind(['angel', 'clown', 'mandarin', 'sturgeon'], 2, 0, 'trumpet', 'anemone')).toEqual([]);
  });
});
