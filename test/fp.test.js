'use strict';

const expect = require('expect');

const arrayFunctions = require('../lib/fp.js');

describe('Array Functions', function(){
  describe('Map call', function(){
    it('returns TypeError  if the callback is not a function', function(){
      let expectCalling = func => ({ withArgs: (...args) => expect(() => func(...args)) });
      expectCalling(arrayFunctions.map.caller).withArgs(['hello', 'goodbye', 8], 9).toThrow();
    });
    it('takes an array and a callback and returns an array of the same lenght', function(){
      let result = arrayFunctions.map.caller(['hello', 'goodbye', 8], n => n + n);
      expect(result).toEqual(['hellohello', 'goodbyegoodbye', 16]);
    });
  });
});
