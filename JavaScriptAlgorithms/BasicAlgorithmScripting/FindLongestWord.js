function findLongestWordLength(str) {
    let wordArray = str.split(" ");
    let maxLen = 0;

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLen) {
            maxLen = wordArray[i].length;
        }
    }

    return maxLen;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));