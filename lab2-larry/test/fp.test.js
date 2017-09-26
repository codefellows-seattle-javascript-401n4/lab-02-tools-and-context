'use strict';

const fp = require('../lib/fp.js');
const expect = require("expect");

describe('Map', function() {

  it('returns double the value of each integer in the array', function() {
    expect(fp.mapCall([4, 5, 6])).toEqual([8, 10, 12]);

  });
  it('returns null', function() {
    expect(fp.mapCall('wizard')).toEqual(null);

  });



});


// console.log(fp.mapCall([4, 5, 6]));
// console.log(fp.mapApply([4, 5, 6]));
// console.log(fp.mapBind());
