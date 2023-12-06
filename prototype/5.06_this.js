`
This: reuse a function

* Four rolls of using 'this' key
  ------------------------------
* implicit binding
* explicit binding
* new binding
* window binding
`

//todo: 01. Implicit binding: where or which number line we call? then before dot (.) which name. 


//! Ex1 

var sakib = {
    name: 'sakib',
    age : 35,

    print: function() {
        console.log(this.name)
    }
}
sakib.print() // before dot 'sakib', 'this' indicate sakib



//! Ex2

var printPlayerName = function (playerObject) {

    playerObject.printPlayer = function () {
        console.log(this.name)
    }
}

var kabir = {
    name : "Kabir"
}
var Tanvir = {
    name : "Tanvir"
}

printPlayerName(kabir)
printPlayerName(Tanvir)

kabir.printPlayer() // before dot kabir, so 'this' kabir
Tanvir.printPlayer() // before dot tanvir, so 'this' kabir



//! Ex3

var Person = function (name, age) {
    return{
        name : name,
        age  : age,

        printPerson: function() {
            console.log(this.name)
        },

        father : {
            name : "Mr. XXX",

            printName: function(){
                console.log(this.name)
            }
        }
    }
}

var talha = Person("Talha", 23)

talha.printPerson() // before dot talha
talha.father.printName() // before dot father



