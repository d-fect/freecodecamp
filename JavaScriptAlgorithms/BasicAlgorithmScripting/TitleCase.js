function titleCase(str) {
    let arr = str.split(" ");
    let first = '';
    for (let i = 0; i < arr.length; i++) {
        first = arr[i][0];
        first = first.toUpperCase();
        arr[i] = first + arr[i].slice(1).toLowerCase();
    }
    str = arr.join(" ");
    console.log(str);
    return str;
}

titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt");
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");