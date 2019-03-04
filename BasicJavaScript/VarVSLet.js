
let printNumTwo;
for (let i = 0; i < 3; i++) {
    console.log("Outside if. i = " + i);
  if(i === 2){
    console.log("Inside if. i = " + i);
    printNumTwo = function() {
      console.log("Inside function. i = " + i);
      return i;
    };
    console.log("After function. i = " + i);
  }
  console.log("After if. i = " + i);
}


/* function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }
 */
console.log(printNumTwo());
// console.log(i);
// returns 3

// checkScope();