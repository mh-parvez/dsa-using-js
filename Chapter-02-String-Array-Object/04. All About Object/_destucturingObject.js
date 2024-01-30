var person = {
  name: "jaman",
  age: 20,

  address: {
    // country: 'Bangladesh',
    city: "Dhaka",
  },
};

let { age } = person;
console.log(age);

let { age: personAge } = person; // change name
console.log(personAge);

let {
  address: { city },
} = person; // nested distructring
console.log(city);

let { name: userName, address: { country } = {} } = person; // default value
console.log(userName, country);
