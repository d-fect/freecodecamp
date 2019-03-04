console.log(Math.max(1,2,3));
console.log(Math.max(1, 3, 2));

var numbers = [1, 5, 6, 2, 3, 7];
function skriv(num) {
    console.log(num);
}
skriv(numbers);
skriv.apply(null, numbers);

console.log(numbers);
console.log(...numbers);
