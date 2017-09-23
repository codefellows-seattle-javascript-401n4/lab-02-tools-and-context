'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

// helper arrays

let goodNums = [1,2,3,4,5,6];
let shitNums = [6,9, 'poop'];
let moreNums = [7,8,9];


// map tests

describe('fp.mapCall', function(){
    it('should take the given array and square every number in it', function(){
        expect(fp.mapCall(moreNums, n => n*n)).toEqual([49,64,81]);
    });
});

describe('fp.mapCall', function(){
    it('should return null if the array given isn\'t all numbers', function(){
        expect(fp.mapCall(shitNums, n => n*n)).toBe(null);
    });
});

describe('fp.mapBind', function(){
    it('should take the given array and square every number in it', function(){
        expect(fp.mapBind(moreNums, n => n*n)).toEqual([49,64,81]);
    });
});

describe('fp.mapBind', function(){
    it('should return null if the array given isn\'t all numbers', function(){
        expect(fp.mapBind(shitNums, n => n*n)).toBe(null);
    });
});

describe('fp.mapApply', function(){
    it('should take the given array and square every number in it', function(){
        expect(fp.mapApply(moreNums, [n => n*n])).toEqual([49,64,81]);
    });
});

describe('fp.mapApply', function(){
    it('should return null if the array given isn\'t all numbers', function(){
        expect(fp.mapApply(shitNums, [n => n*n])).toBe(null);
    });
});


// filter tests 

describe('fp.filterCall', function(){
    it('should take an array and return to you just the even numbers', function(){
        expect(fp.filterCall(goodNums, n => n%2 ===0)).toEqual([2,4,6]);
    });
});

describe('fp.filterCall', function(){
    it('should return null if the array given isn\'t all numbers', function(){
        expect(fp.filterCall(shitNums, n => n%2 ===0)).toBe(null);
    });
});

describe('fp.filterBind', function(){
    it('should take an array and return to you just the even numbers', function(){
        expect(fp.filterBind(goodNums, n => n%2 ===0)).toEqual([2,4,6]);
    });
});

describe('fp.filterBind', function(){
    it('should return null if the array given isn\'t all numbers', function(){
        expect(fp.filterBind(shitNums, n => n%2 ===0)).toBe(null);
    });
});

describe('fp.filterApply', function(){
    it('should take an array and return to you just the even numbers', function(){
        expect(fp.filterApply(goodNums, [n => n%2 ===0])).toEqual([2,4,6]);
    });
});

describe('fp.filterApply', function(){
    it('should return null if the array given isn\'t all numbers', function(){
        expect(fp.filterApply(shitNums, [n => n%2 ===0])).toBe(null);
    });
});