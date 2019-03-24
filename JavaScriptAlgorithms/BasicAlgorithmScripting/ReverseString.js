function reverseString(str) {
    let reverseString = "";
    for (let i = str.length; i > 0; i--) {
        reverseString += str[i - 1];
    }
    return reverseString;
}

console.log(reverseString("Greetings from Earth"));