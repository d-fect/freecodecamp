// ES5
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zevs = new SpaceShuttle('Jupiter');

// ES6
class SpaceShuttle2 {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle2('Jupiter');

console.log(zevs.targetPlanet);
console.log(zeus.targetPlanet);

function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Vegetable {
        constructor(name){
            this.name = name;
        }
    }
    /* Alter code above this line */
    return Vegetable;
  }
  const Vegetable = makeClass();
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // => should be 'carrot'

  const cucumber = new Vegetable('cucumber');
  console.log(cucumber.name);