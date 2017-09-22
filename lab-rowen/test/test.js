'use strict';

const expect = require('expect');
const assert = require('assert');
const fx = require('../lib/fp.js');

describe('map', function() {

  describe('call', function() {

    it('correctly applied a callback to the array', function() {

      let arr = [0, 1, 2, 3];

      assert.equal([0, 2, 4, 6], fx.mapCall(arr, num => num*2));

    });

    it('returns null in case of invalid input', function() {

      assert.equal(null, fx.mapCall('string', true));

    });

  });

});

    // describe('bind', function() {
    //
    //   it('addy(1, 2) returns 3', function() {
    //
    //     assert.equal(3, mathy.addy(1, 2));
    //
    //   });
    //
    //   it('returns null in case of invalid input', function() {
    //
    //     assert.equal(null, mathy.addy('string', true));
    //
    //   });
    //
    //   describe('apply', function() {
    //
    //     it('addy(1, 2) returns 3', function() {
    //
    //       assert.equal(3, mathy.addy(1, 2));
    //
    //     });
    //
    //     it('returns null in case of invalid input', function() {
    //
    //       assert.equal(null, mathy.addy('string', true));
    //
    //     });

  // });
