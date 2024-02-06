"use strict";
const person1 = ["Hasan", 20, true];
// const person2: PersonInformation = [24, "Lima", true]; //error 💔
const person2 = ["Lima", 24, false];
// console.log(person1);
// console.log(person1[1]);
const displayPersonInfo = (person) => {
    const [name, age, hasDrivingLicense] = person;
    const info = `Name: ${name} Age: ${age} hasDrivingLicense: ${hasDrivingLicense ? 'Yes' : 'No'}`;
    console.log(info);
};
displayPersonInfo(person1);
