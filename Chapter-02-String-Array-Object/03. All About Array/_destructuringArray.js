let fruits = ["mango", "banana", "guava", "cocunut"];

let [mango, banana] = fruits;
console.log(mango, banana);

let [, , guava, cocunut] = fruits;
console.log(guava, cocunut);

let numbers = [1, 2, 3, [100, 200, 500], 4, 5];

let [, , a, [, b], , c] = numbers;

console.log(a, b, c);

// Swaping

var x = 1;
var y = ((2)[(y, x)] = [x, y]);

console.log(y);
