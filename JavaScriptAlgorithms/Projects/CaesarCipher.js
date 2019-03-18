
function rot13(str) { // LBH QVQ VG!
    let newChar = 0;
    let rotString = "";
    for (let i = 0; i < str.length; i++) {
        newChar = str.charCodeAt(i);
        if (newChar < 65 || newChar > 90) {
            rotString += String.fromCharCode(newChar);
        } else {
            if (newChar + 13 > 90) {
                newChar -= 26;
            }
            rotString += String.fromCharCode(newChar+13);
        }
    }
    return rotString;
}
  
// Change the inputs below to test

console.log(rot13("LBH QVQ VG!"));
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));
// rot13("SERR PBQR PNZC");                                  // FREE CODE CAMP
// rot13("SERR CVMMN!");                                     // FREE PIZZA!
// rot13("SERR YBIR?");                                      // FREE LOVE?
// rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");    // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.