//todo: ...rest, usually, if the array is longer than the list at the left, the “extra” items are omitted.

// let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar
// Further items aren't assigned anywhere

// let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest is array of items, starting from the 3rd one
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

let [name1, name2, ...titles] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];
console.log(titles); //now titles = ["Consul", "of the Roman Republic"]

let options = {
  title: "Menu",
  height: 200,
  width: 100,
};

// title = property named title
// rest = object with the rest of properties
let { title, ...rest } = options;

function sum(num1, ...rest) {
  console.log(num1);
  console.log(rest);
  return rest.reduce((p, c) => p + c);
}
// console.log(sum(69,3,4,45,5,5))
