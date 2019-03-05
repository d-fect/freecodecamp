/*
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor;
  }
}
const lol = new Book('anonymous');
console.log(lol.writer);  // anonymous
lol.writer = 'wut';
console.log(lol.writer);  // wut
 */
// **************************************************

function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Thermostat {
        constructor(temperature) {
            this.Ftemp = temperature;
        }

        get temperature() {
            return ((5 / 9) * (this.Ftemp - 32));
        }

        set temperature(Ctemp) {
            this.Ftemp = Ctemp * 9.0 / 5 + 32;
        }
    }
    /* Alter code above this line */
    return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);

thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);