'use strict';

const expect = require('expect');

const arrayFunctions = require('../lib/fp.js');

//two tests per array method

describe('Array Functions', function(){
  describe('Map call', function(){
    it('logs an error if the callback is not a function', function(){
      let result = arrayFunctions.map.caller(['hello', 'goodbye', 8], 5);
      expect(result).toEqual();
    });
    it('takes an array and a callback and returns an array of the same lenght', function(){
      let result = arrayFunctions.map.caller(['hello', 'goodbye', 8], n => n + n);
      expect(result).toEqual(['hellohello', 'goodbyegoodbye', 16]);
    });
  });
  describe('Reduce bind', function(){
    it('logs an error if the no arguments ', function(){
      let result = arrayFunctions.reduce.binder();
      expect(result).toEqual();
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
  describe('splice call', function(){
    it('returns an empty array second', function(){
      let staringArray = ['hello', 'goodbye', 8];
      arrayFunctions.splice.caller(staringArray, (acc, cur) => acc + cur);
      expect(staringArray).toEqual(staringArray);
    });
    it('takes an array, the starting index, the number to delete, and optional item to add and returns deleted array', function(){
      let staringArray = ['hello', 'goodbye', 8];
      arrayFunctions.splice.caller(staringArray, [1, 0, 'dog']);
      expect(staringArray).toEqual(['hello', 'dog', 'goodbye', 8]);
    });
  });
});
