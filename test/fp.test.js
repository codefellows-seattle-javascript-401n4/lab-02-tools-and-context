'use strict';

let fp = require('../lib/fp.js');

let expect = require('expect');

describe('Functional Program', function(){
	describe('map', function(){
		
		it('correctly returns a TypeError if the object to map is not an array', function(){
			
			try {

				fp.map.call('hello', el => el + '-');
			}
			catch(e) {

				expect(e.name).toEqual('TypeError');
			}
		})

		it('correctly concatenates "hi " at the beginning of every element in the array', function(){

			let list = ['Michael', 'John', 'Stephanie', 'Josh'];
			let result = fp.map.call(list, el => 'hi ' + el);

			expect(result).toEqual(['hi Michael', 'hi John', 'hi Stephanie', 'hi Josh']);
		})
	})

	describe('filter', function(){

		it('correctly returns an error if the object to filter is not an array', function(){

			try {

				fp.filter.call(el => el > 2);
			}
			catch(e) {

				expect(e.name).toEqual('TypeError');
			}
		})

		it('correctly filters out all even numbers from an array of numbers', function(){

			let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			let result = fp.filter.call(list, el => (el%2) !== 0);

			expect(result).toEqual([1, 3, 5, 7, 9]);
		})
	})

	describe('reduce', function(){

		it('correctly accumulates an array of numbers to a single numerical value', function(){
			
			let list = [1, 2, 3, 4, 5];
			let acc = 0;

			let result = fp.reduce.call(list, (acc, curr) => acc + curr);

			expect(result).toEqual(15);
		})

		it('correctly flattens a two-dimensional array', function(){

			let list = [[1, 2], [3, 4], [5, 6, 7]];
			let acc = [];

			let result = fp.reduce.call(list, (acc, curr) => acc.concat(curr));

			expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
		})
	})

	describe('concat', function(){

		it('correctly returns an error if one of the arguments is not an array', function(){

			try {
				fp.concat.call('hello', [1, 2, 3]);
			}
			catch(e){
				expect(e.name).toEqual('TypeError');
			}
		})

		it('correctly concatenates more than two arrays together', function(){

			let result = fp.concat.call(['hi', 'hello', 3], ['bye', 'farewell', 1]);
			expect(result).toEqual(['hi', 'hello', 3, 'bye', 'farewell', 1]);
		})
	})

	describe('splice', function(){
		it('correctly returns an error if splice is not called on an array', function(){

			try {
				fp.splice.call('hello', 1, 2);
			}
			catch(e){
				expect(e.name).toEqual('TypeError');
			}
		})

		it('correctly removes an item at index x for number of items y', function(){

			let result = fp.splice.call(['sung', 'nina', 'james', 4, 5], [2, 1]);
			expect(result).toEqual(['james']);
		})
	})
})