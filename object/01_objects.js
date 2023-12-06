
//todo: remove or delete property 

var person = {
    "user" : "Alex",
    "age" : 23,
    "his skills" : ["singing", "drawing", "fighting"] 
}

delete person["his skills"]
delete person.age

console.log(person.age, person["her hobbies"])
console.log(person)


//todo: comparing two objects

obj1 = { a: 10 }
obj2 = { a: 10 }

console.log(obj1 === obj2) //memory location are diffrent
console.log(obj1.a === obj2.a) //just cheaking value and datatype


//todo: compound properties, when variable are keys

const key1 = "objkey1";
const key2 = "objkey2";
const key3 = "objkey3 outer";

const value1 = "myobjValu1";
const value2 = "myobjValu2";

const compoundObj = {
    [key1] : value1,
    [key2] : value2,
}
compoundObj[key3] = "outerValue"


//todo: enhance object, when key & value name are same

let bangla = 45, english = 67

const secondSemester = {
    bangla,
    english
}

function makeUser(name, age) {
    return {
        name, 
        age,  
    }
}

const marksPrinter = {
    print() {
        console.log("mewww")
    }
}
marksPrinter.print()





