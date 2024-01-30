//todo: iterate objects properties

var user = {
  name: "John",
  age: 30,
  isAdmin: true,
};

for (let key in user) {
  console.log(key); // name, age, isAdmin
  console.log(user[key]); // John, 30, true
}

let obj = {
  test: undefined,
};

console.log(obj.test); // it's undefined, so - no such property?
console.log("test" in obj); // true, the property does exist!

//todo: keys ordering problem solve

var codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

for (let code in codes) {
  //if the keys are non-integer, then they are listed in the creation order.
  console.log(code); // 1, 41, 44, 49
}

let user = {
  name: "John",
  surname: "Smith",
};

for (let prop in user) {
  //non-integer properties are listed in the creation order
  console.log(prop); // name, surname
}

//step: So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer. Adding a plus "+" sign before each code is enough.

let codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA",
};

for (let code in codes) {
  console.log(+code); // 49, 41, 44, 1
}
