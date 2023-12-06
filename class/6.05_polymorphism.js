class Player {
    #name;
    #age;
    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }
    getName() {
        return this.#name;
    }
    getAge() {
        return this.#age;
    }
    getPlayerDetails() {
        return `${this.#name} is ${this.#age} years old.`;
    }
}

class Crickter extends Player {
    #centuries;
    
    constructor(name, age, centuries) {
        super(name, age);
        this.#centuries = centuries;
    }
    getPlayerDetails() { //method overriding
        // console.log(super.getAge())
        // console.log(super.getPlayerDetails())
        // console.log(`${this.getName()} এর বয়স ${this.getAge()} বছর ।`)
        return `${this.getName()} এর বয়স ${this.getAge()} বছর । `;
    }
}

class Footballer extends Player {
    #goals;
    constructor(name, age, goals) {
        super(name, age);
        this.#goals = goals;
    }
}

const sakib = new Crickter("Skaib", 34, 20);
const ronaldo = new Footballer("Ronaldo", 37, 330);

console.log(sakib.getPlayerDetails());
console.log(ronaldo.getPlayerDetails());

