'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

it('mapCall 1: calls map correctly', function(){

  expect(fp.mapCall([1,2,3], n => n*2)).toEqual([2,4,6]);

});

it('mapCall 2: calls map correctly', function(){

  expect(fp.mapCall(['red', 'blue', 'green'], index => index.toUpperCase())).toEqual(['RED', 'BLUE', 'GREEN']);

});
