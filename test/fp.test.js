'use strict';

const expect = require('expect');
const arrayFunctions = require('../lib/fp.js');

describe('Array Functions', function(){
  describe('Array call function maker', function(){
    it('takes an array method and makes a new function using call', function(){
      let result = arrayFunctions.arrayCall('map')
      expect(typeof result).toEqual('function');
    })
  })

})
