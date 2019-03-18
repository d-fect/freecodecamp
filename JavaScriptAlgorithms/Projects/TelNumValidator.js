function telephoneCheck(str) {
    // if (str.match("/^\d| |-|\(|\)/g") == null) {
    if (str.match("/^\d|\(|\)/g") == null) {
            return false;
    } else {
        return true;
    }
}

function checkResult(str, expectedResult) {
    if (telephoneCheck(str) == expectedResult) {
        console.log("Correct result");
    } else {
        console.log("ERROR: " + str + " gave the wrong result!");
    }
}  

checkResult("a1 555-555-5555", false);
checkResult("1a 555-555-5555", false);
// checkResult("1 555-555-5555", true);
// checkResult("1 (555) 555-5555", true);
// checkResult("5555555555", true);
// checkResult("555-555-5555", true);
// checkResult("(555)555-5555", true);
// checkResult("1(555)555-5555", true);
// checkResult("555-5555", false);
// checkResult("5555555", false);
// checkResult("1 555)555-5555", false);
// checkResult("1 555 555 5555", true);
// checkResult("1 456 789 4444", true);
// checkResult("123**&!!asdf#", false);
// checkResult("55555555", false);
// checkResult("(6054756961)", false);
// checkResult("2 (757) 622-7382", false);
// checkResult("0 (757) 622-7382", false);
// checkResult("-1 (757) 622-7382", false);
// checkResult("2 757 622-7382", false);
// checkResult("10 (757) 622-7382", false);
// checkResult("27576227382", false);
// checkResult("(275)76227382", false);
// checkResult("2(757)6227382", false);
// checkResult("2(757)622-7382", false);
// checkResult("555)-555-5555", false);
// checkResult("(555-555-5555", false);
// checkResult("(555)5(55?)-5555", false);