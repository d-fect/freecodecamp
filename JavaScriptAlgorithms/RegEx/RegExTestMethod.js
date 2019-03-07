// ** Matching literal strings. Using .test()
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(myRegex.test(myString)); 

let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);    // Returns true

let wrongRegex = /kevin/;
wrongRegex.test(testStr);   // Returns false

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let waldoResult = waldoRegex.test(waldoIsHiding);
console.log(waldoResult);

// ** | = OR
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let orResult = petRegex.test(petString);
console.log(orResult);

// ** Ignore case (i)
let myCaseString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // i = ignore case
let caseResult = fccRegex.test(myCaseString);
console.log("Ignoring case, and result is: " + caseResult);

// ** Extract matches   .match()
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let matchResult = extractStr.match(codingRegex); // Change this line
console.log("The result is: " + matchResult);

// ** Multiple hits (g)
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // g = multiple matches
let starResult = twinkleStar.match(starRegex); // Change this line
console.log(starResult);

// ** Wildcard (.)
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let wildResult = unRegex.test(exampleStr);
// let wildResult = exampleStr.match(unRegex);
console.log(wildResult);

let unStr = "Let's have some fun in the sun!";
let uhnRegex = /.un/g; // Gives both results as an array
// let uhnRegex = /.un/; // Gives first result in array with index and more
// let unResult = uhnRegex.test(unStr);
let unResult = unStr.match(uhnRegex);
console.log(unResult);

// ** Using character classes
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let vowelResult = quoteSample.match(vowelRegex); // Change this line
console.log("This array: [" + vowelResult + " contains " + vowelResult.length + " characters.");

