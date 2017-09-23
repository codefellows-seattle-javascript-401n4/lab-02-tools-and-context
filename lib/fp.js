'use strict';
function Car(name, color){
  this.name = name;
  this.color = color;
}
function Sport(name, color){
  Car.call(name, color);
  this.category = 'sport';
}
// 
function Family(name, color){
  Car.call(name, color);
  this.category = 'family';
}
var gti = new Sport('gti', 'blue');
console.log(gti);
