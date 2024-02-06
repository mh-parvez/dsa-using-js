"use strict";
const person = {
    name: "Pakiza",
    age: 23,
    isStudent: true,
    address: {
        city: "Sylhet",
        country: "Nuwakali",
    },
    info() {
        return `${this.name} ${this.age} ${this.isStudent}`;
    },
};
// const person2: Person = {
//   name: "Tithi",
//   age: 23,
//   isStudent: true,
//   address: {
//     city: "Sylhet",
//     country: "Bangladesh",
//   },
// };
console.log(person.info());
