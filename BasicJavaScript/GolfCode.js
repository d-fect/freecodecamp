var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    console.log("strokes = " + strokes + ", par = " + par);
    return names[0];
  } else if (strokes <= par - 2) {
    console.log("strokes = " + strokes + ", par = " + par);
    return names[1];
  } else if (strokes == par - 1) {
    console.log("strokes = " + strokes + ", par = " + par);
    return names[2];
  } else if (strokes == par ) {
    console.log("strokes = " + strokes + ", par = " + par);
    return names[3];
  } else if (strokes == par +1) {
    console.log("strokes = " + strokes + ", par = " + par);
    return names[4];
  } else if (strokes == par +2) {
    console.log("strokes = " + strokes + ", par = " + par);
    return names[5];
  } else {
    console.log("strokes = " + strokes + ", par = " + par);
  return names[6];
  }
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

console.log("4,1 " + golfScore(4, 1));
console.log("4,2 " + golfScore(4, 2));
console.log("5,2 " + golfScore(5, 2));
console.log("4,3 " + golfScore(4, 3));
console.log("4,4 " + golfScore(4, 4));
console.log("1,1 " + golfScore(1, 1));
console.log("5,5 " + golfScore(5, 5));
console.log("4,5 " + golfScore(4, 5));
console.log("4,6 " + golfScore(4, 6));
console.log("4,7 " + golfScore(4, 7));
console.log("5,9 " + golfScore(5, 9));
