function convertToInteger(str) {
  return parseInt(str);
}

function convertToIntegerRad(str) {
    return parseInt(str, 2);
}

function checkSign(num) {
    return (num == 0 ? "zero" : (num > 0) ? "positive" : "negative");
}

// console.log(convertToInteger("56"));
// console.log(convertToInteger("77"));
// console.log(convertToInteger("JamesBond"));

// console.log(convertToIntegerRad("10011"));
// console.log(convertToIntegerRad("111001"));
// console.log(convertToIntegerRad("JamesBond"));

console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
console.log(checkSign("10"));
