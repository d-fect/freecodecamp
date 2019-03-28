function truncateString(str, num) {
    // Clear out that junk in your trunk
    // console.log(str + ": " + str.length + ", num = " + num);
    if (num >= str.length) {
        return str;
    } else {
        return str.slice(0,num).concat("...");
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("1234", 4);

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length+2));
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
