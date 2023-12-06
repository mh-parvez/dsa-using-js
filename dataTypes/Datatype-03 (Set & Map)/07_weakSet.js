
//todo: only object can pass, methods - add(), has(), delete()

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John visited us
visitedSet.add(pete); // Then Pete
visitedSet.add(john); // John again

// visitedSet has 2 users now
// check if John visited?
console.log(visitedSet.has(john)); // true

// check if Mary visited?
console.log(visitedSet.has(mary)); // false

john = null;
//visitedSet will be cleaned automatically


const weSet = new WeakSet();

class Person {
    constructor() {
        weSet.add(this); //jokhon new objets create hobe, thokon seta weakset a jabe
    }

    print() {
        if (!ws.has(this)) {
            throw new Error("You can't access this method directly"); // weakSet a new objects na thakle error dibe
        } else {
            console.log("I am Called");
        }
    }
}

const a = new Person();

// a.print();
// Person.prototype.print();
//note: class is just an syntextic sugar that's way we can access the prototype. weakset can solve this problem


