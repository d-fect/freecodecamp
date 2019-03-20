function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    // console.log(arr.length);
    for (let i = 0; i < arr.length; i++) {
        // console.log(i);
        // console.log(i + ": " + arr[i]);
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    // change code above this line
    return newArr;
  }

  // change code here to test different cases:
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
  console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));
  console.log(filteredArray([ ["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
  console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));
