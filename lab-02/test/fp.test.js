'use strict';

const fp = require('../lib/fp.js');
const expect = require("expect");

describe('FP Map: ', () => {

    it('applyMap should correctly double every value of array',() => {
        expect(fp.applyMap([1,2,3], [(n) => n * 2])).toEqual([2,4,6]);
    });
    it('applyMap should return null when non-number is in array', () => {
        expect(fp.applyMap([1,2,"Hello"], [(n) => n * 2])).toEqual(null);
    });

    it('callMap should correctly double every value of array',() => {
        expect(fp.callMap([1,2,3], n => n * 2)).toEqual([2,4,6]);
    });
    it('callMap should return null when non-number is in array', () => {
        expect(fp.callMap([1,2,'string'], n => n * 2)).toEqual(null);
    });

    it('bindMap should correctly double every value of array',() => {
        expect(fp.bindMap(true)).toEqual([2,4,6]);
    });
    it('bindMap should return null when non-number is in array', () => {
        expect(fp.bindMap(false)).toEqual(null);
    });
});

describe('FP Filter: ', () => {
    it('callFilter should return numbers larger than 2', () => {
        expect(fp.callFilter([1,2,3], n =>  n > 2)).toEqual([3]);
    });

    it('callFilter should null when string is passed instead of number', () => {
        expect(fp.callFilter([1,2,'hello'], (n) =>  n > 2)).toBe(null);
    });

    it('bindFilter should return numbers ', () => {
        expect(fp.bindFilter(true, n => n )).toEqual([1,2,3]);
    });

    it('bindFilter should null because we are passing in a string', () => {
        expect(fp.bindFilter(false, n => n )).toEqual(null);
    });

    it('applyFilter should correctly return the array we inputted',() => {
        expect(fp.applyFilter([1,2,3], [n => n])).toEqual([1,2,3]);
    });

    it('applyFilter should return null because we entered a string',() => {
        expect(fp.applyFilter([1,2,'string'], [n => n])).toEqual(null);
    });
});

describe('FP Reduce:', () => {

    it('callReduce should return the total of [1,2,3]', () => {
        expect(fp.callReduce([1,2,3], (prev, curr) => curr + prev, 0)).toEqual(6);
    });

    it('callReduce should return null because you cannot add numbers to a string', () => {
        expect(fp.callReduce(['hello',2,3], (prev, curr) => curr + prev, 0)).toEqual(null);
    });

    it('applyReduce should return the total of [1,2,3]', () => {
        expect(fp.applyReduce([1,2,3], [(prev, curr) => curr + prev, 0])).toEqual(6);
    });

    it('applyReduce should return null because you cannot add numbers to a string', () => {
        expect(fp.applyReduce(['hello',2,3], [(prev, curr) => curr + prev, 0])).toEqual(null);
    });

    it('bindReduce should return total of [1,2,3]', ()=> {
        expect(fp.bindReduce(true, (prev, curr) => prev + curr, 0)).toBe(6);
    });

    it('bindReduce should null when passing in a string with numbers', ()=> {
        expect(fp.bindReduce(false, (prev, curr) => prev + curr, 0)).toBe(null);
    });
});

describe('FP Concat: ', () => {
    it('callConcat should return [1,2,3,4,5,6]',() => {
        expect(fp.callConcat([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
    });

    it('callConcat should return null because user didnot enter array',() => {
        expect(fp.callConcat(null, [1,2,3])).toEqual(null);
    });

    it('applyConcat should return [1,2,3,4,5,6]',() => {
        expect(fp.applyConcat([1,2,3],[4,5,6])).toEqual([1,2,3,4,5,6]);
    });

    it('applyConcat should return null because only 1 array was passed in',() => {
        expect(fp.applyConcat([1,2,3],null)).toEqual(null);
    });

    it('bindConcat should return [1,2,3,4,5,6] because both binded arrays are valid',() => {
        expect(fp.bindConcat(true)).toEqual([1,2,3,4,5,6]);
    });

    it('bindConcat should return null because we bound an array that contain ',() => {
        expect(fp.bindConcat(false)).toEqual(null);
    });
});

describe('FP Splice: ', () => {
    it('callSplice should return [2]',() => {
        expect(fp.callSplice([1,2,3], 1, 1)).toEqual([2]);
    });

    it('callSplice should return null because user didenter array',() => {
        expect(fp.callSplice(null, 1, 1)).toEqual(null);
    });

    it('applySplice should return [2]',() => {
        expect(fp.callSplice([1,2,3], 1, 1)).toEqual([2]);
    });

    it('applySplice should return null because only 1 array was passed in',() => {
        expect(fp.callSplice(null, 1, 1)).toEqual(null);
    });

    it('bindSplice should return ',() => {
        expect(fp.bindSplice(1,1)).toEqual([2]);
    });

    it('bindSplice should return null because we did not pass in index correctly',() => {
        expect(fp.bindSplice('1', 1)).toEqual(null);
    });
});