'use strict';

const expect = require('expect');

const arrayFunctions = require('../lib/fp.js');

//two tests per array method

describe('Array Functions', function(){
  let expectCalling = func => ({ withArgs: (...args) => expect(() => func(...args)) });
  describe('Map call', function(){
    it('returns TypeError if the callback is not a function', function(){
      expectCalling(arrayFunctions.map.caller).withArgs(9).toThrow();
    });
    it('takes an array and a callback and returns an array of the same lenght', function(){
      let result = arrayFunctions.map.caller(['hello', 'goodbye', 8], n => n + n);
      expect(result).toEqual(['hellohello', 'goodbyegoodbye', 16]);
    });
  });
  describe('Reduce bind', function(){
    it('returns TypeError if the callback is not a function', function(){
      expectCalling(arrayFunctions.reduce.binder).withArgs(0, 0).toThrow();
    });
    it('takes an array and a callback and returns a reduced set', function(){
      let result = arrayFunctions.reduce.binder(['hello', 'goodbye', 8], (acc, cur) => acc + cur);
      expect(result).toEqual('hellogoodbye8');
    });
  });
  describe('concat apply', function(){
    it('returns array if the second element is not an array', function(){
      let result = arrayFunctions.concat.applier(['hello', 'goodbye', 8], {'apple': 'yes'});
      expect(result).toEqual(['hello', 'goodbye', 8,{'apple': 'yes'}]);
    });
    it('takes two array returns one unified array', function(){
      let result = arrayFunctions.concat.applier(['hello', 'goodbye', 8], [8, 'dfdk', {apple: 'yes'}]);
      expect(result).toEqual( ['hello', 'goodbye', 8, 8, 'dfdk', {'apple': 'yes'}]);
    });
  });
  describe('splice bind', function(){
    it('returns TypeError if the args are a function', function(){
      expectCalling(arrayFunctions.splice.binder).withArgs([1,2,3], (prev, curr) => prev + curr).toThrow();
    });
    it('takes an array, the starting index, the number to delete, and optional item to add and returns deleted array', function(){
      let staringArray = ['hello', 'goodbye', 8];
      arrayFunctions.splice.binder(staringArray, [1, 0, 'dog']);
      expect(staringArray).toEqual(['hello', 'dog', 'goodbye', 8]);
    });
  });
});
