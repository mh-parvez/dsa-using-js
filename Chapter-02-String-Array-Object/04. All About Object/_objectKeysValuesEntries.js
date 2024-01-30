//todo: Object.keys(), Object.values(), Object.entries()

//note: These methods are generic, there is a common agreement to use them for data structures. If we ever create a data structure of our own, we should implement them too. They are supported for, Map, Set, Array plain objects also support similar methods, but the syntax is a bit different.

// Object.keys(obj) – returns an array of keys.
// Object.values(obj) – returns an array of values.
// Object.entries(obj) – returns an array of [key, value] pairs.

let user = {
  name: "John",
  age: 30,
};

// Object.keys(user) = ["name", "age"]
// Object.values(user) = ["John", 30]
// Object.entries(user) = [ ["name","John"], ["age",30] ]

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(salaries) {
  let sum = 0;
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  console.log(sum);
}
sumSalaries(salaries); // 650
