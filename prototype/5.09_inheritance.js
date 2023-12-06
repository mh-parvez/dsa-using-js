

var Person = function () {}
console.dir(Person)

// Prototype-Chain: Root Object -> f() -> Person()

Object.prototype.salam = function (){
    console.log("Assamulaikum")
}

Person.salam()
"Parvez".salam()

