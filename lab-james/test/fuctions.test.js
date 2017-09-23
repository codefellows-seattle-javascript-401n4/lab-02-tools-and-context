'use strict';

const fp = require('../lib/fp.js');
const expect = require('expect');

describe('mapCall', function(){

  it('mapCall 1: calls map correctly', function(){

    expect(fp.mapCall([1, 2, 3], n => n * 2)).toEqual([2, 4, 6]);

  });

  it('mapCall 2: calls map correctly', function(){

    expect(fp.mapCall(['red', 'blue', 'green'], index => index.toUpperCase())).toEqual(['RED', 'BLUE', 'GREEN']);

  });

});

//====================================================================================================

describe('mapApply', function(){

  it('mapApply 1: applies map correctly', function(){

    expect(fp.mapApply([1, 2, 3], n => n * 2)).toEqual([2, 4, 6]);

  });

  it('mapApply 2: applies map correctly', function(){

    expect(fp.mapApply(['red', 'blue', 'green'], index => index.toUpperCase())).toEqual(['RED', 'BLUE', 'GREEN']);

  });

});

//====================================================================================================

describe('mapBind', function(){

  it('mapBind 1: binds correctly', function(){

    expect(fp.mapBind()).toEqual([2, 4, 6]);

  });

});

//====================================================================================================

describe('filterCall', function(){

  it('filterCall 1: calls filter correctly', function(){

    expect(fp.filterCall([1, 2, 3], n => n < 3)).toEqual([1, 2]);

  });

  it('filterCall 2: calls filter correctly', function(){

    expect(fp.filterCall(['Red', 'Blue', 'Green'], word => word.length > 3)).toEqual(['Blue', 'Green']);

  });

});

//====================================================================================================

describe('filterBind', function(){

  it('filterBind binds correctly', function(){

    expect(fp.filterBind()).toEqual([1, 2]);

  });

});

//===================================================================================================

describe('reduceCall', function(){

  it('reduceCall 1: calls reduce correctly', function(){

    expect(fp.reduceCall([1, 2, 3], (acc, n) => acc + n)).toEqual(6);

  });

  it('reduceCall 2: calls reduce correctly', function(){

    expect(fp.reduceCall(['red', 'blue', 'red', 'green', 'blue', 'red'], )).toEqual(['red', 'blue', 'green']);

  });

});
