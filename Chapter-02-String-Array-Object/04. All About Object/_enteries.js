//todo: object to array

var obj = {
  a: "🍎",
  b: "🍌",
};
console.log(Object.entries(obj));
console.log(Object.entries(obj).flat());

const fruits = ["🍓", "🍅", "🥭", "🍎", "🍍"];

for (const fruit of fruits.entries()) {
  console.log(fruit);
}

//todo: array to object

var objArr = [
  ["a", 10],
  ["b", 20],
];
console.log(Object.fromEntries(objArr));
