'use strict';



const expect = require('expect');
const fp = require('../lib/fp.js');



describe('map using call', () => {
  it('shoud return [12, 24, 36, 48]', () => {
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
  it('should return 10', () => {
    expect(fp.reduceBind([1,2,3,4],(a,c) => a + c, 0)).toEqual(10);
  });
});



describe('splice using call', () => {
  it('should return ["orange"]', () => {
    expect(fp.spliceCall(['apple', 'banana', 'orange', 'grape'], 2, 1)).toEqual(['orange']);
  });
  it('should return ["banana", "orange"]', () => {
    expect(fp.spliceCall(['apple', 'banana', 'orange', 'grape'], 1, 2)).toEqual(['banana', 'orange']);
  });
  it('should return []', () => {
    expect(fp.spliceCall(['apple', 'banana', 'orange', 'grape'], 2, 0, 'hello', 'bye bye')).toEqual([]);
  });
});



describe('splice using apply', () => {
  it('should return ["orange"]', () => {
    expect(fp.spliceApply(['apple', 'banana', 'orange', 'grape'], 2, 1)).toEqual(['orange']);
  });
  it('should return ["banana", "orange"]', () => {
    expect(fp.spliceApply(['apple', 'banana', 'orange', 'grape'], 1, 2)).toEqual(['banana', 'orange']);
  });
  it('should return []', () => {
    expect(fp.spliceApply(['apple', 'banana', 'orange', 'grape'], 2, 0, 'hello', 'bye bye')).toEqual([]);
  });
});



describe('splice using bind', () => {
  it('should return ["orange"]', () => {
    expect(fp.spliceBind(['apple', 'banana', 'orange', 'grape'], 2, 1)).toEqual(['orange']);
  });
  it('should return ["banana", "orange"]', () => {
    expect(fp.spliceBind(['apple', 'banana', 'orange', 'grape'], 1, 2)).toEqual(['banana', 'orange']);
  });
  it('should return []', () => {
    expect(fp.spliceBind(['apple', 'banana', 'orange', 'grape'], 2, 0, 'hello', 'bye bye')).toEqual([]);
  });
});
