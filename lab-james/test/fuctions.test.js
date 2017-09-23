'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

it('calls map correctly', function(){

  expect(fp.mapCall([1,2,3], n => n*2)).toBe([2,4,6]);

});
