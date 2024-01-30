var arr = [4, 5, 7, 8, 9, 1, 3, -1, 4];

console.log(arr.reverse());

//join(), converting string with separetor.
console.log(arr.join(""));
console.log(arr.join("/"));

//fill(value, start, end), fill same value in array.
console.log(arr.fill(0));
console.log(arr.fill(0, 4, 7));
console.log(arr.fill("*", 3, 5));

//concat(), marage array and return new array
var arr2 = arr.concat(arr);
var arr3 = arr.concat([90, 65, 89]);

//isArray(), Is it array?
console.log(Array.isArray(arr));

//Array.from(), copying a array to another array.
var a = [1, 2];
var b = a;

b[0] = 100;
console.log(a); // changed original array also,
var c = Array.from(a); // not changed original

console.log([48, 95, 44].toString());
console.log(typeof [48, 95, 44].toString());
