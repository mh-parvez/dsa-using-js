//todo: we have an array with the name and surname

let arr = ["John", "Smith"];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]

// let [firstName, surname] = arr;
console.log(firstName); // John
console.log(surname);  // Smith

// let [firstName, surname] = "John Smith".split(' ');
console.log(firstName); // John
console.log(surname);  // Smith

// second element is not needed
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(title); // Consul

let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

let user = {
  name: "John",
  age: 30,
};
// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

let user2 = new Map();
user2.set("name", "John");
user2.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user2) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

let guest = "Jane";
let admin = "Pete";

// Let's swap the values: make guest=Pete, admin=Jane
[guest, admin] = [admin, guest];
console.log(`${guest} ${admin}`); // Pete Jane (successfully swapped!)

// Default values:
// let [firstName, surname] = [];
// alert(firstName); // undefined
// alert(surname); // undefined

// default values
let [name = "Guest", surname = "Anonymous"] = ["Julius"];
alert(name); // Julius (from array)
alert(surname); // Anonymous (default used)

//todo: objects destru

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

// let { title, width, height } = options;

// changed the order in let {...}
// let {height, width, title} = { title: "Menu", height: 200, width: 100 }

let options = {
  title: "Menu",
  width: 100,
  height: 200,
};

{
  sourceProperty: targetVariable;
}
let { width: w, height: h, title } = options;

// For potentially missing properties we can set default values using "=", like this
let options2 = {
  title: "Menu",
};
let { width = 100, height = 200, title } = options2;

// We also can combine both the colon and equality:
let options = {
  title: "Menu",
};
let { width: w = 100, height: h = 200, title } = options;

// If we have a complex object with many properties, we can extract only what we need:
let options = {
  title: "Menu",
  width: 100,
  height: 200,
};
// only extract title as a variable
let { title } = options;

// let title, width, height;
({ title, width, height } = { title: "Menu", width: 200, height: 100 });
console.log(title); // Menu

//todo: nested

let options = {
  size: {
    width: 100,
    height: 200,
  },
  items: ["Cake", "Donut"],
  extra: true,
};

// destructuring assignment split in multiple lines for clarity
let {
  size: {
    // put size here
    width,
    height,
  },
  items: [item1, item2], // assign items here
  title = "Menu", // not present in the object (default value is used)
} = options;

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut

// we pass object to function
let options = {
  title: "My menu",
  items: ["Item1", "Item2"],
};

//  ...and it immediately expands it to variables
function showMenu({
  title = "Untitled",
  width = 200,
  height = 100,
  items = [],
}) {
  // title, items – taken from options,
  // width, height – defaults used
  alert(`${title} ${width} ${height}`); // My Menu 200 100
  alert(items); // Item1, Item2
}

showMenu(options);

// let {prop : varName = default, ...rest} = object
// let [item1 = default, item2, ...rest] = array
