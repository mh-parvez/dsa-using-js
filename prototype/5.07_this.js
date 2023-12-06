

//todo: 02. explicit binding

var person = {
    name: "Sakib",
    age: 23
}

var printName1 = function (profession, nationality) {
    console.log(this.name, this.age, profession, nationality)
}
printName1.call(person, "male", "bangladesi")


var printName2 = function (profession, nationality) {
    console.log(this.name, this.age, profession, nationality)
}
printName2.apply(person, ["male", "bangladesi"])


var printName3 = function (profession, nationality) {
    console.log(this.name, this.age, profession, nationality)
}
const sotreForUsingLater = printName3.bind(person, "male", "bangladesi") //bind return function reference
console.log(sotreForUsingLater())

 
//todo: If an object has many methods and we plan to actively pass it around, then we could bind them all in a loop

for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
}

