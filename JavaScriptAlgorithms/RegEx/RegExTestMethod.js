// // ** Matching literal strings. Using .test()
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString); // Change this line
// console.log(myRegex.test(myString)); 

// let testStr = "Hello, my name is Kevin.";
// let testRegex = /Kevin/;
// testRegex.test(testStr);    // Returns true

// let wrongRegex = /kevin/;
// wrongRegex.test(testStr);   // Returns false

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let waldoResult = waldoRegex.test(waldoIsHiding);
// console.log(waldoResult);

// // ** | = OR
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let orResult = petRegex.test(petString);
// console.log(orResult);

// // ** Ignore case (i)
// let myCaseString = "freeCodeCamp";
// let fccRegex = /freecodecamp/i; // i = ignore case
// let caseResult = fccRegex.test(myCaseString);
// console.log("Ignoring case, and result is: " + caseResult);

// // ** Extract matches   .match()
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let matchResult = extractStr.match(codingRegex); // Change this line
// console.log("The result is: " + matchResult);

// // ** Multiple hits (g)
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/ig; // g = multiple matches
// let starResult = twinkleStar.match(starRegex); // Change this line
// console.log(starResult);

// // ** Wildcard (.)
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/; // Change this line
// let wildResult = unRegex.test(exampleStr);
// // let wildResult = exampleStr.match(unRegex);
// console.log(wildResult);

// let unStr = "Let's have some fun in the sun!";
// let uhnRegex = /.un/g; // Gives both results as an array
// // let uhnRegex = /.un/; // Gives first result in array with index and more
// // let unResult = uhnRegex.test(unStr);
// let unResult = unStr.match(uhnRegex);
// console.log(unResult);

// // ** Using character sets
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/ig; // Change this line
// let vowelResult = quoteSample.match(vowelRegex); // Change this line
// console.log("RegEx result: " + vowelResult + ". Length: " + vowelResult.length + " characters.");

// // ** Character ranges
// let alphabetSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let alphabetResult = alphabetSample.match(alphabetRegex); // Change this line
// console.log("RegEx result: " + alphabetResult + ". Length: " + alphabetResult.length + " characters.");

// // ** Matching numbers and letter
// let numberSample = "Blueberry 3.141592653s are delicious.";
// let numberRegex = /[h-s2-6]/ig; // Change this line
// let numberResult = numberSample.match(numberRegex); // Change this line
// console.log("RegEx result: " + numberResult + ". Length: " + numberResult.length + " characters.");

// // ** Negated character sets
// let negSample = "3 blind mice.";
// let negRegex = /[^aeiou1-9]/ig; // Change this line
// let negResult = negSample.match(negRegex); // Change this line
// console.log("RegEx result: " + negResult + ". Length: " + negResult.length + " characters.");

// // ** Char repeats one or more times, + = one or more characters
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/g; // Change this line
// let result = difficultSpelling.match(myRegex);
// console.log(result);

// ** Char occurs Zero or more times, * = zero or more characters
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/; // Change this line
// let result = chewieQuote.match(chewieRegex);
// console.log("RegEx result: " + result + ". Length: " + result[0].length + " characters.");

// // ** Lazy matching. Greedy match finds the longest possivble part, lazy finds smallest possible part
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<h.?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result);

// // ** Let's catch some criminals
// let crowd = 'P1P2P3P4P5P6CCCP7P8P9';
// let reCriminals = /C+/; // Change this line
// let matchedCriminals = crowd.match(reCriminals);
// console.log("RegEx result: " + matchedCriminals + ". Lenght: " + matchedCriminals[0].length);

// // ** Beginning String Patterns ^
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/; // Change this line
// let result = calRegex.test(rickyAndCal);
// console.log("RegEx result: " + result);

// // ** Matching Ending String Patterns $
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);
// console.log("RegEx result: " + result);

// // ** Match ALL letters and numbers
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g; // Change this line
// let result = quoteSample.match(alphabetRegexV2).length;
// console.log("RegEx result: " + result);

// // ** Match everything BUT Letters and Numbers
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g; // Change this line
// let result = quoteSample.match(nonAlphabetRegex).length;
// console.log("RegEx result: " + result);

// // ** Match all numbers
// let numString = "Your sandwich will be $5.00";
// let numRegex = /\d/g; // Change this line
// let result = numString.match(numRegex).length;
// console.log("RegEx result: " + result);

// // ** Match all NON-numbers
// let numString = "Your sandwich will be $5.00";
// let noNumRegex = /\D/g; // Change this line
// let result = numString.match(noNumRegex).length;
// console.log("RegEx result: " + result);

// ** Restrict user names
/*
1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
2) Username letters can be lowercase and uppercase.
3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
 */
// let username = "JackOfAllTrades";   // true
// // let username = "JACK";           // true
// // let username = "J";              // false
// // let username = "Oceans11";       // true
// // let username = "RegexGuru";      // true
// // let username = "007";            // false
// // let username = "9";              // false

// let userCheck = /\D+\D+\d*$/i; // Change this line
// // let result = userCheck.test(username);
// let result = username.match(userCheck);
// console.log("RegEx result: " + result);

// // * Match Whitespace \s = [ \r\t\f\n\v] = "space, carriage return, tab, form feed, new line"
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g; // Change this line
// let result = sample.match(countWhiteSpace);
// console.log("RegEx result: " + result);


// // ** Match Non-Whitespace characters, \S =  [^ \r\t\f\n\v]
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g; // Change this line
// let result = sample.match(countNonWhiteSpace);
// console.log("RegEx result: " + result);

// // * Specify UPPER and Lower number of matches, {3,6}
// let ohStr = "Ohhhhhhh no";
// let ohRegex = /Oh{3,6} /; // Change this line
// let result = ohRegex.test(ohStr);
// console.log("RegEx result: " + result);


// ** Specify Lower Number of Matches, {x,} = at least x matches
// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/; // Change this line
// let result = haRegex.test(haStr);
// console.log("RegEx result: " + result);

// ** Specify Exact number of Matches, {x}
// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/; // Change this line
// let result = timRegex.test(timStr);
// console.log("RegEx result: " + result);

// // ** Check for All or None, ? = zero or one 
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);
// console.log("RegEx result: " + result);

// // ** Positive and Negative Lookahead
// // Positive: (?=...) where the ... is the required part that is not matched.
// // Negative: (?!...) where the ... is the pattern that you do not want to be there
// // match passwords that are greater than 5 characters long and have two consecutive digits.
// let sampleWord = "banan1";
// let pwRegex = /(?=\w{5,})(?=\D*\d{2,})/; // Change this line
// let result = pwRegex.test(sampleWord);
// console.log("RegEx result: " + result);

// // ** Reuse Patterns Using Capture Groups
// // match numbers that are repeated only three times in a string, each separated by a space
// let repeatNum = "42 42 42";
// let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
// let result = reRegex.test(repeatNum);
// let matchedNumbers = repeatNum.match(reRegex);
// console.log("RegEx result: " + matchedNumbers);
// console.log("RegEx result: " + result);

// // ** Use Capture Groups to Search and Replace
// // "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); // Returns "Camp Code"
// let huhText = "This sandwich is good.";
// let fixRegex = /good/; // Change this line
// let replaceText = "okey-dokey"; // Change this line
// let result = huhText.replace(fixRegex, replaceText);
// console.log("RegEx result: " + result);

// ** Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
console.log("Initi string: " + hello);
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ''); // Change this line
console.log("RegEx result: " + result);

// let A100 = "h" + "a".repeat(100) + "h";
// console.log(A100);
