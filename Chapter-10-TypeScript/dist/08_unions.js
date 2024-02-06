"use strict";
//union and intersection
const inputValue = (value) => {
    if (typeof value === "string") {
        return "Email Login";
    }
    else if (typeof value === "number") {
        return "Passworld Login";
    }
    else {
        throw new Error("invalid input data...");
    }
};
// type EmployeeDetails = PersonInfo | Employee //union
// const empolye:EmployeeDetails = {
//   name : 'Kabir',
//   age: 32
// }
const personInfo = {
    name: 'Kabir',
    age: 32
};
const empolye = {
    empolyId: 57757,
    department: "IT",
};
// type EmployeeDetails = PersonInfo & Employee; //intersection
// const empolye: EmployeeDetails = {
//   name: "Kabir",
//   age: 32,
//   empolyId: 57757,
//   department: "IT",
// };
const createUserProfile = (person, empolye) => {
    return { ...person, ...empolye };
};
const allDetails = createUserProfile(personInfo, empolye);
console.log(allDetails);
