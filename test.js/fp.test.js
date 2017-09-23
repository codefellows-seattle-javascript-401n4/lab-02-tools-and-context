'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('fp', function() {

  describe('mapCall', function() {
    it('should return UPPERCASE array if the function works', function() {
      let plants = ['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils'];
      let result = fp.mapCall(plants, (plant) => plant.toUpperCase());
      expect(result).toEqual([ 'SUNFLOWERS', 'DAHLIAS', 'ROSES', 'PEONIES', 'AZALEAS', 'DAFFODILS' ]);
    });
  });

  // describe('mapBind', function() {
  //   it('should return an UPPERCASE array if the function works', function() {
  //     let plants = ['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils'];
  //     let plantUppercase = (plant) => this.plant.toUpperCase();
  //     let result = fp.mapBind(plants, plantUppercase);
  //     expect(result).toEqual([ 'SUNFLOWERS', 'DAHLIAS', 'ROSES', 'PEONIES', 'AZALEAS', 'DAFFODILS' ]);
  //   });
  // });

  describe('mapApply', function() {
    it('should return an UPPERCASE array if the function works', function() {
      let plants = ['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils'];
      let plantUppercase = (plant) => plant.toUpperCase();
      let result = fp.mapApply(plants, plantUppercase);
      expect(result).toEqual([ 'SUNFLOWERS', 'DAHLIAS', 'ROSES', 'PEONIES', 'AZALEAS', 'DAFFODILS' ]);
    });
  });

  describe('filterCall', function() {
    it('should return a filtered array with just element or elements with words that are less than 6 letters', function() {
      let plants = ['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils'];
      let roses = function (word) {
        return word.length < 6;
      };
      let result = fp.filterCall(plants, roses);
      expect(result).toEqual(['roses']);
    });
  });

  describe('filterApply', function() {
    it('should return a filtered array with just element or elements with words that are less than 6 letters', function() {
      let plants = ['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils'];
      let roses = (word) => word.length < 6;
      let result = fp.filterApply(plants, roses);
      expect(result).toEqual(['roses']);
    });
  });

  describe('reduceCall', function() {
    it('should return a long string', function() {
      let plants = ['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils'];
      let longName = (accumulator, currentValue) => accumulator + currentValue;
      let result = fp.reduceCall(plants, longName);
      expect(result).toEqual('sunflowersdahliasrosespeoniesazaleasdaffodils');
    });
  });

  describe('reduceApply', function() {
    it('should return a long string', function() {
      let plants = ['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils'];
      let longName = (accumulator, currentValue) => accumulator + currentValue;
      let result = fp.reduceApply(plants, longName);
      expect(result).toEqual('sunflowersdahliasrosespeoniesazaleasdaffodils');
    });
  });

  describe('concatCall', function() {
    it('should return 1 long combined array from 2 separate arrays', function() {
      let plants1 = ['sunflowers', 'dahlias', 'roses'];
      let plants2 = ['peonies', 'azaleas', 'daffodils'];
      let result = fp.concatCall(plants1, plants2);
      expect(result).toEqual(['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils']);
    });
  });

  describe('concatApply', function() {
    it('should return 1 long combined array from 2 separate arrays', function() {
      let plants1 = ['sunflowers', 'dahlias', 'roses'];
      let plants2 = ['peonies', 'azaleas', 'daffodils'];
      let result = fp.concatApply(plants1, plants2);
      expect(result).toEqual(['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils']);
    });
  });

  describe('spliceCall', function() {
    it('should return a new array of items that were deleted from an original array', function() {
      let plants1 = ['sunflowers', 'dahlias', 'roses'];
      let start = 0;
      let deleteCount = 2;
      let result = fp.spliceCall(plants1, start, deleteCount);
      expect(result).toEqual(['sunflowers', 'dahlias']);
    });
  });

  describe('spliceApply', function() {
    it('should return a new array of items that were deleted from the original array', function() {
      let plants1 = ['sunflowers', 'dahlias', 'roses'];
      let start = 0;
      let deleteCount = 2;
      let result = fp.spliceApply(plants1, start, deleteCount);
      expect(result).toEqual(['sunflowers', 'dahlias']);
    });
  });

});
