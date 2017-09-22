'use strict';

const fp = require('../lib/fp.js');
const expect = require("expect");

// describe('FP Map: ß', () => {

//     it('applyMap should correctly double every value of array',() => {
//         expect(fp.applyMap([1,2,3], [(n) => n * 2])).toEqual([2,4,6]);
//     });
//     it('applyMap should return null when non-number is in array', () => {
//         expect(fp.applyMap([1,2,"Hello"], [(n) => n * 2])).toEqual(null);
//     });

//     it('callMap should correctly double every value of array',() => {
//         expect(fp.callMap([1,2,3], n => n * 2)).toEqual([2,4,6]);
//     });
//     it('callMap should return null when non-number is in array', () => {
//         expect(fp.callMap([1,2,'string'], n => n * 2)).toEqual(null);
//     });

//     it('bindMap should correctly double every value of array',() => {
//         expect(fp.bindMap(true)).toEqual([2,4,6]);
//     });
//     it('bindMap should return null when non-number is in array', () => {
//         expect(fp.bindMap(false)).toEqual(null);
//     });
// });

describe('FP Filter: ', () => {
    // it('callFilter should return numbers larger than 2', () => {
    //     expect(fp.callFilter([1,2,3], n =>  n > 2)).toEqual([3]);
    // });

    // it('callFilter should null when string is passed instead of number', () => {
    //     expect(fp.callFilter([1,2,'hello'], (n) =>  n > 2)).toBe(null);
    // });

    // it('bindFilter should return numbers ', () => {
    //     expect(fp.bindFilter(true, n => n )).toEqual([1,2,3]);
    // });

    // it('bindFilter should null because we are passing in a string', () => {
    //     expect(fp.bindFilter(false, n => n )).toEqual(null);
    // });

    // it('applyFilter should correctly return the array we inputted',() => {
    //     expect(fp.applyFilter([1,2,3], [n => n])).toEqual([1,2,3]);
    // });

    // it('applyFilter should return null because we entered a string',() => {
    //     expect(fp.applyFilter([1,2,'string'], [n => n])).toEqual(null);
    // });
});