'use strict';

const index = require(__dirname + '/../index.js');
const expect = require('expect');

let oldArgv;

describe('CLI', () => {
  after (()  => {
    process.argv = oldArgv;
  });

  before(() => {
    oldArgv = process.argv;
    process.argv = ['node', 'index.js', 'say', 'something', 'happy'];
  });

  it('should say SAY SOMETHING HAPPY', () => {
    expect(index()).toEqual('SAY SOMETHING HAPPY');
  });
});