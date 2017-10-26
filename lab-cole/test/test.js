'use strict';

//to run this file, enter 'npm test', note that it works cause package.json has "scripts: { "test": "mocha"
const expect = require('expect');
const fp = require('../lib/fp.js');

//Map tests with Call, Bind, and Apply
describe ('map', () => {

  describe ('mapCall', () => {
    it ('returns an array', () => {
      expect(fp.mapCall([1,2,3], n => n * 2)).toEqual([2,4,6]);
    });
    it ('returns NaN', () => {
      expect(fp.mapCall('a', i => i * 2)).toEqual([NaN]);
    });
  });

  describe ('mapBind', () => {
    it ('returns an array', () => {
      expect(fp.mapBind([1,2,3], n => n * 2)).toEqual([2,4,6]);
    });
    it ('returns NaN', () => {
      expect(fp.mapBind('a', i => i * 2)).toEqual([NaN]);
    });
  });

  describe ('mapApply', () => {  
    it ('returns an array', () => {
      expect(fp.mapApply([1,2,3], n => n * 2)).toEqual([2,4,6]);
    });
    it ('returns NaN', () => {
      expect(fp.mapBind('a', i => i * 2)).toEqual([NaN]);
    });
  });

});


//Filter tests with Call, Bind, and Apply
describe ('filter', () => {

  describe ('filterCall', () => {
    it ('returns an array without the first integer', () => {
      expect(fp.filterCall([1,2,3], n => n > 1)).toEqual([2,3]);
    });
    it ('returns an empty array', () => {
      expect(fp.filterBind('a', i => i > 1)).toEqual([]);
    });
  });

  describe ('filterBind', () => {
    it ('returns an array without the first integer', () => {
      expect(fp.filterBind([1,2,3], n => n > 1)).toEqual([2,3]);
    });
    it ('returns an empty array', () => {
      expect(fp.filterBind('a', i => i > 1)).toEqual([]);
    });
  });

  describe ('filterApply', () => {
    it ('returns an array without the first integer', () => {
      expect(fp.filterApply([1,2,3], n => n > 1)).toEqual([2,3]);
    });
    it ('returns an empty array', () => {
      expect(fp.filterBind('a', i => i > 1)).toEqual([]);
    });
  });

});


//Reduce tests with Call, Bind, and Apply
describe ('reduce', () => {

  describe ('reduceCall', () => {
    it ('sums all the integers in the array and returns the sum', () => {
      expect(fp.reduceCall([1,2,3], (prev, curr) => (prev + curr))).toEqual(6);
    });
    it ('returns sum of the array of strings', () => {
      expect(fp.reduceCall(['a', 'b', 'c'], (prev, curr) => (prev + curr))).toEqual('abc');
    });
  });

  describe ('reduceBind', () => {
    it ('sums all the integers in the array and returns the sum', () => {
      expect(fp.reduceBind([1,2,3], (prev, curr) => (prev + curr))).toEqual(6);
    });
    it ('returns sum of the array of strings', () => {
      expect(fp.reduceCall(['a', 'b', 'c'], (prev, curr) => (prev + curr))).toEqual('abc');
    });
  });

  describe ('reduceApply', () => {  
    it ('sums all the integers in the array and returns the sum', () => {
      expect(fp.reduceApply([1,2,3], (prev, curr) => (prev + curr))).toEqual(6);
    });
    it ('returns sum of the array of strings', () => {
      expect(fp.reduceCall(['a', 'b', 'c'], (prev, curr) => (prev + curr))).toEqual('abc');
    });
  });

});


//Concat tests with Call, Bind, and Apply
describe ('concat', () => {

  describe ('concatMap', () => {
    it ('concatenates two arrays of integers', () => {
      expect(fp.concatCall([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
    });
    it ('concatenates two arrays of strings', () => {
      expect(fp.concatCall(['a', 'b'], ['c'])).toEqual(['a', 'b', 'c']);
    });
  });

  describe ('concatBind', () => {
    it ('concatenates two arrays', () => {
      expect(fp.concatCall([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
    });
    it ('concatenates two arrays of strings', () => {
      expect(fp.concatCall(['a', 'b'], ['c'])).toEqual(['a', 'b', 'c']);
    });
  });

  describe ('concatApply', () => {  
    it ('concatenates two arrays', () => {
      expect(fp.concatCall([1,2,3], [4,5,6])).toEqual([1,2,3,4,5,6]);
    });
    it ('concatenates two arrays of strings', () => {
      expect(fp.concatCall(['a', 'b'], ['c'])).toEqual(['a', 'b', 'c']);
    });
  });

});


//Splice tests with Call, Bind, and Apply
describe ('splice', () => {

  describe ('spliceCall', () => {
    it ('enters an integer in position [1] and returns the integer removed', () => {
      expect(fp.spliceCall([1,4,3], [1, 1, 2])).toEqual([4]);
    });
    it ('enters a string in position [1] and returns the string removed', () => {
      expect(fp.spliceCall(['a','d','c'], [1, 1, 'c'])).toEqual(['d']);
    });
  });

  describe ('spliceBind', () => {
    it ('enters an integer in position [1] and returns the integer removed', () => {
      expect(fp.spliceCall([1,4,3], [1, 1, 2])).toEqual([4]);
    });
    it ('enters a string in position [1] and returns the string removed', () => {
      expect(fp.spliceCall(['a','d','c'], [1, 1, 'c'])).toEqual(['d']);
    });
  });

  describe ('spliceApply', () => {  
    it ('enters an integer in position [1] and returns the integer removed', () => {
      expect(fp.spliceCall([1,4,3], [1, 1, 2])).toEqual([4]);
    });      
    it ('enters a string in position [1] and returns the string removed', () => {
      expect(fp.spliceCall(['a','d','c'], [1, 1, 'c'])).toEqual(['d']);
    });
  });
});