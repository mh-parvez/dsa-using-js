//Note: 'new' key always return an object

console.log(typeof 0); // "number"
console.log(typeof new Number(0)); // "object"

let zero = new Number(0);

if (zero) {
  console.log("zero is truthy!?!"); // zero is true, because it's an object
}

console.log(null.test); // error, null/undefined have no methods

let num = Number("123"); // now, it's ok. convert a string to number
