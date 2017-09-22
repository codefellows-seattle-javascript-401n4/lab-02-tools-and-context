'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('fp.map', function(){
    it('should square every number in the original array', function(){
        expect(fp.map([1,2,3], n => n*n)).toEqual([1,4,9]);
    });
});

describe('fp.map', function(){
    it('should add a space and poop to every string', function (){
        expect(fp.map(['smelly', 'stinky', 'huuuuuge'], n => `${n} poop`)).toEqual(['smelly poop', 'stinky poop', 'huuuuuge poop'])
    })
})