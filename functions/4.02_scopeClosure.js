`
In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated object known as the Lexical Environment.

The Lexical Environment object consists of two parts:

01. Environment Record  an object that stores all local variables as its properties (and some other information like the value of this).
02. A reference to the outer lexical environment, the one associated with the outer code.
`

function makeCounter() {
    let count = 0;
    return function () {
        return count++;
    };
}
let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2

`
All functions remember the Lexical Environment in which they were made. Technically, theres no magic here: all functions have the hidden property named [[Environment]], that keeps the reference to the Lexical Environment where the function was created

So, counter.[[Environment]] has the reference to {count: 0} Lexical Environment. Thats how the function remembers where it was created, no matter where its called. The [[Environment]] reference is set once and forever at function creation time.

Later, when counter() is called, a new Lexical Environment is created for the call, and its outer Lexical Environment reference is taken from counter.[[Environment]]

A closure is a function that remembers its outer variables and can access them.
`


let name = "John";

function sayHi() {
  console.log("Hi, " + name);
}
name = "Pete";
sayHi(); // what will it show: "John" or "Pete"?
`
The answer is: Pete.
A function gets outer variables as they are now, it uses the most recent values.
Old variable values are not saved anywhere. When a function wants a variable, it takes the current value from its own Lexical Environment or the outer one.
`














