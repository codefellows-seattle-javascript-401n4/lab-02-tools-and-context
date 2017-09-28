'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('Map', function(){

  it('call should return null if a non-number is used in the array', function() {
    expect(fp.mapWithCall([5, 6, '', 'Joe'], a=>a*3)).toEqual(null);
  });

  it('call should add 3 to every number in the array', function() {
    expect(fp.mapWithCall([ 0, 15, 1, 2, 8, 12], a=>a+3)).toEqual([3, 18, 4, 5, 11, 15]);
  });

  it('apply should return null if a non-number is used in the array', function() {
    expect(fp.mapWithApply([5, 6, '', 'Joe'], [a=>a*3])).toEqual(null);
  });

  it('apply should add 3 to every number in the array', function() {
    expect(fp.mapWithApply([ 0, 15, 1, 2, 8, 12], [a=>a+3])).toEqual([3, 18, 4, 5, 11, 15]);
  });

  it('bind should return null if a non-number is used in the array', function() {
    expect(fp.mapWithBind([5, 6, '', 'Joe'], a=>a*3)).toEqual(null);
  });

  it('bind should add 3 to every number in the array', function() {
    expect(fp.mapWithBind( [0, 15, 1, 2, 8, 12], a=>a+3)).toEqual([ 3, 18, 4, 5, 11, 15 ]);
  });

});

describe('Filter', function(){

  it('call should return null if a non-number is used in the array', function() {
    expect(fp.filterWithCall([5, 6, '', 'Joe'], a=>a<5)).toEqual(null);
  });

  it('call should return an array with numbers less than 5', function() {
    expect(fp.filterWithCall([ 0, 15, 1, 2, 8, 12], a=>a<5)).toEqual([0, 1, 2]);
  });

  it('apply should return null if a non-number is used in the array', function() {
    expect(fp.filterWithApply([5, 6, '', 'Joe'], [a=>a<5])).toEqual(null);
  });

  it('apply should return an array with numbers less than 5', function() {
    expect(fp.filterWithApply([ 0, 15, 1, 2, 8, 12], [a=>a<5])).toEqual([0, 1, 2]);
  });

  it('bind should return null if a non-number is used in the array', function() {
    expect(fp.filterWithBind([5, 6, '', 'Joe'], a=>a<5)).toEqual(null);
  });

  it('bind should return an array with numbers less than 5', function() {
    expect(fp.filterWithBind( [0, 15, 1, 2, 8, 12], a=>a<5)).toEqual([0, 1, 2]);
  });

});

describe('Concat', function(){

  it('call should return null if a non-number is used in either array', function() {
    expect(fp.concatWithCall([ 4, 2, 1 ], [ 5, 'Joe'])).toEqual(null);
  });

  it('call should return the two arrays correctly concatenated', function() {
    expect(fp.concatWithCall([ 4, 2, 1 ], [ 8, 99 ])).toEqual([ 4, 2, 1, 8, 99 ]);
  });

  it('apply should return null if a non-number is used in the array', function() {
    expect(fp.concatWithApply([ 4, 2, 1 ], [ 5, 'Joe'])).toEqual(null);
  });

  it('apply should return the two arrays correctly concatenated', function() {
    expect(fp.concatWithApply([ 4, 2, 1 ], [ 8, 99 ])).toEqual([ 4, 2, 1, 8, 99 ]);
  });

  it('bind should return null if a non-number is used in the array', function() {
    expect(fp.concatWithBind([ 4, 2, 1 ], [ 5, 'Joe'])).toEqual(null);
  });

  it('bind should return the two arrays correctly concatenated', function() {
    expect(fp.concatWithBind([ 4, 2, 1 ], [ 8, 99 ])).toEqual([ 4, 2, 1, 8, 99 ]);
  });

});

describe('Splice', function(){

  it('call should return null if input contains a non-number', function() {
    expect(fp.spliceWithCall([ 5, 'Joe'], 2 )).toEqual(null);
  });

  it('call should return a new array correctly spliced', function() {
    expect(fp.spliceWithCall( [ 4, 2, 1, 3, 7 ], 2 )).toEqual([ 1, 3, 7 ]);
  });

  it('apply should return null if input contains a non-number', function() {
    expect(fp.spliceWithApply([ 5, 'Joe'], 2 )).toEqual(null);
  });

  it('apply should return null because only one argument is an array', function() {
    expect(fp.spliceWithApply([ 4, 2, 1 ], 2 )).toEqual(null);
  });

  it('bind should return null if input contains a non-number', function() {
    expect(fp.spliceWithBind([ 5, 'Joe'], 2 )).toEqual(null);
  });

  it('bind should return a new array correctly spliced', function() {
    expect(fp.spliceWithBind([ 4, 2, 1, 3, 7 ], 2 )).toEqual([ 1, 3, 7 ]);
  });


});

describe('Reduce', function(){

  it('call should return a sum of the array elements', function() {
    expect(fp.reduceWithCall([ 4, 2, 1, 3 ], (prev, curr) => curr + prev, 0)).toEqual(10);
  });

  it('call should return null because the array contains a non-number', function() {
    expect(fp.reduceWithCall( [ 4, 'hi' ], (prev, curr) => curr + prev, 0)).toEqual(null);
  });

  it('apply should return a sum of the array elements', function() {
    expect(fp.reduceWithApply([ 4, 2, 1, 3 ], [(prev, curr) => curr + prev, 0])).toEqual(10);
  });

  it('apply should return null because the array contains a non-number', function() {
    expect(fp.reduceWithApply([ 4, 'hi' ], (prev, curr) => curr + prev, 0)).toEqual(null);
  });

  it('bind should return null because the array contains a non-number', function() {
    expect(fp.reduceWithBind([ 4, 'hi' ], (prev, curr) => curr + prev, 0)).toEqual(null);
  });

  it('bind should return a sum of the array elements', function() {
    expect(fp.reduceWithBind([ 4, 2, 1, 3 ], (prev, curr) => curr + prev, 0)).toEqual(10);
  });

});
