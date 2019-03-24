function convertToF(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function checkResult(str, expectedResult) {
    if (convertToF(str) == expectedResult) {
        console.log("Correct result");
    } else {
        console.log("ERROR: " + str + " gave the wrong result!");
    }
}

convertToF(30);

checkResult(-30, -22);
checkResult(-10, 14);
checkResult(0, 32);
checkResult(20, 68);
checkResult(30, 86);