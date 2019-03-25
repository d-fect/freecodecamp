function reverseString(str) {
    // let reverseString = "";
    // for (let i = str.length; i > 0; i--) {
    //     reverseString += str[i - 1];
    // }
    // return reverseString;

    return str.split("").reverse().join("");
}

console.log(reverseString("Greetings from Earth"));