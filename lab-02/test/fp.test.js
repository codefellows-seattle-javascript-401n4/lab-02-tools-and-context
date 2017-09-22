'use strict';

const fp = require('../lib/fp.js');
const expect = require("expect");

describe('FP', () => {

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