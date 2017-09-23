'use strict';

const fp = require('./lib/fp.js');

function balls(){
  console.log(this.sound);
}

let chunks = {
  sound: 'Bouncy!',
};

let ballsChunks = balls.bind(chunks);

ballsChunks();

let drool = {
  drip: function(sound){
    console.log('Baby Droolie goes ' + sound);
  },
};

let babyDroolie = drool.drip.bind(this);

let soundArray = ['dink', ' dank', ' dunk'];

babyDroolie(soundArray);