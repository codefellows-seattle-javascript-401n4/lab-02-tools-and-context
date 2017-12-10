'use strict';



const expect = require('expect');
const index = require('../lib/index.js');



let oldArgv;


describe('CLI', () => {
  after(() => {
    process.argv = oldArgv;

  });


  before(() => {
    oldArgv = process.argv;
    process.argv = ['node', 'index.js', 'HELLO', 'BRIAN'];

  });


  it('should return hello brian in caps', function() {
    expect(index()).toEqual('HELLO BRIAN');

  });
});
