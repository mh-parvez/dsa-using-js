
//todo: In JavaScript, functions are objects & they are provide us lots of properties

function sayHi() {
    console.log("Hi");
}
console.log(sayHi.name); // sayHi


let user = {
    sayHi() {
        // ...
    },
    sayBye: function () {
        // ...
    }
}
console.log(user.sayHi.name); // sayHi
console.log(user.sayBye.name); // sayBye


function f1(a) { }
function f2(a, b) { }
function many(a, b, ...more) { }

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2


function sayHi() {
    alert("Hi");

    // let's count how many times we run
    sayHi.counter++;
}
sayHi.counter = 0; // initial value

sayHi(); // Hi
sayHi(); // Hi

alert(`Called ${sayHi.counter} times`); // Called 2 times

