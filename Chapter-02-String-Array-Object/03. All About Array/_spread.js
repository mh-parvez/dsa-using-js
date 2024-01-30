//todo: ...spread, whole of place eiter function perameter.

let teacher = {
  name: "Kabir",
  dept: "Civil",
};

let teacher2 = { ...teacher };
teacher2.name = "Shadik";

let allTeachers = {
  ...teacher,
  teacher2,
};

console.log(teacher.name, teacher2.name);
console.log(allTeachers);

const userNam = {
  ..."write", // indexs are key, alphabets are values
};

const hobbis = {
  ...["read", "write", "sleep", "repeat"],
};

console.log(Math.min(...[75, 85, 9]));

console.log(...["read", "write", "sleep", "repeat"]);

console.log(["read", "write", "sleep", [..."repeat"]]);

console.log(["read", "write", "sleep", ...[..."repeat"]]);

// We also can pass multiple iterables this way:

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

alert(Math.max(...arr1, ...arr2)); // 8

alert(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

let merged = [0, ...arr, 2, ...arr2];

alert(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

let str = "Hello";
alert([...str]); // H,e,l,l,o

// Array.from converts an iterable into an array
alert(Array.from(str)); // H,e,l,l,o

// Copy an array/object
// Remember when we talked about Object.assign() in the past?

// It is possible to do the same thing with the spread syntax.

let arr = [1, 2, 3];

let arrCopy = [...arr]; // spread the array into a list of parameters
// then put the result into a new array

// do the arrays have the same contents?
alert(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// are the arrays equal?
alert(arr === arrCopy); // false (not same reference)

// modifying our initial array does not modify the copy:
arr.push(4);
alert(arr); // 1, 2, 3, 4
alert(arrCopy); // 1, 2, 3

// Note: that it is possible to do the same things to make a copy of an object:

let obj = { a: 1, b: 2, c: 3 };

let objCopy = { ...obj }; // spread the object into a list of parameters
// then return the result in a new object

// do the objects have the same contents?
alert(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// are the objects equal?
alert(obj === objCopy); // false (not same reference)

// modifying our initial object does not modify the copy:
obj.d = 4;
alert(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
alert(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}
