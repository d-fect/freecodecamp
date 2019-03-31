function titleCase(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        first = arr[i][0];
        first = first.toUpperCase();
        console.log(first);
        arr[i] = first;
    }
    console.log(arr);
    return str;
}

titleCase("I'm a little tea pot");