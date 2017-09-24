let plants = ['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils'];

plantUppercase = function(plant) {
  return plant.toUpperCase();
  };

function mapCall(array, callback){
 return Array.prototype.map.call(array, callback);
}

mapCall(plants, plantUppercase);



let plants = ['sunflowers', 'dahlias', 'roses', 'peonies', 'azaleas', 'daffodils'];
console.log('first');
let plantUppercase = function(plant) {
  return plant.toUpperCase();
};

let mapBind = function() {
  return Array.prototype.map.call(this.plant, this.callback);
}.bind( {plant:plants, callback:plantUppercase} );

console.log(mapBind());
