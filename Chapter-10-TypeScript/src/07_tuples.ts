type PersonInformation = readonly [string, number, boolean];

const person1: PersonInformation = ["Hasan", 20, true];
// const person2: PersonInformation = [24, "Lima", true]; //error 💔
const person2: PersonInformation = ["Lima", 24, false]; 

// console.log(person1);
// console.log(person1[1]);

const displayPersonInfo = (person:PersonInformation):void => {
    const [name, age, hasDrivingLicense] =  person;
    const info = `Name: ${name} Age: ${age} hasDrivingLicense: ${hasDrivingLicense ? 'Yes' : 'No'}`
    console.log(info);
}
displayPersonInfo(person1);

