
class Player {
    #name
    #age
    constructor(name, age) {
        this.#name = name
        this.#age = age
    }
    getPlayerDetails() {  
        return `${this.#name} ${this.#age} `   
    }
}  

class Crickter extends Player{
    #centuries
    constructor(name, age, centuries) {
        super(name, age)
        this.#centuries = centuries
    }
}         

class Footballer extends Player{
    #goals
    constructor(name, age, goals) { 
        super(name, age)
        this.#goals = goals
    }
}

const sakib = new Crickter("sakib", 34, 20)
const ronaldo = new Footballer("ronaldo", 34, 330)

console.log(sakib.getPlayerDetails())
console.log(ronaldo.getPlayerDetails())

console.log(sakib instanceof Player)
console.log(sakib instanceof Crickter)
console.log(ronaldo instanceof Player)
console.log(ronaldo instanceof Footballer)

