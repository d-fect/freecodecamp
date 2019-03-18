function palindrome(str) {
    // Good luck!
    let isPalindrome = true;
    let regex = /[A-Za-z0-9]/ig;  // Can't use \w as it includes _
    let result = str.match(regex);

    if (result != null) {
        // result = result.join('').toLowerCase();
        let resultLength = result.length;
        // console.log("The converted string is " + result);
        // console.log("It is " + resultLength + " characters long.");
        for (let i = 0; i < resultLength; i++) {
            if (result[i].toLowerCase() != result[resultLength-i-1].toLowerCase()) {
                isPalindrome = false;
                break;
            }
        }
    } else {
        console.log("The string has no alphanumeric characters");
        return false;
    }
    console.log("String: " + str + " is a palindrome? " + isPalindrome);
    return isPalindrome;
  }
  
  
  console.clear();
  palindrome("eye");                                // true
  palindrome("_eye");                               // true
  palindrome("race car");                           // true
  palindrome("not a palindrome");                   // false
  palindrome("A man, a plan, a canal. Panama");     // true
  palindrome("never odd or even");                  // true
  palindrome("nope");                               // false
  palindrome("almostomla");                         // false
  palindrome("My age is 0, 0 si ega ym.");          // true
  palindrome("1 eye for of 1 eye.");                // false
  palindrome("0_0 (: /-\ :) 0-0");                  // true
  palindrome("five|\_/|four");                      // false