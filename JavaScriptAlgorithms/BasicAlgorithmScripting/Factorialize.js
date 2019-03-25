function factorialize(num) {
    // let res = 1;
    // for (let i = 2; i <= num; i++) {
    //     res *= i;
    // }
    // return res;

    if (num === 0) { return 1; }
    return num * factorialize(num - 1);
}

console.log(factorialize(20));