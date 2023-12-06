
//todo:  new funciton, The syntax for creating a function

let func = new Function ([arg1, arg2, ...argN], functionBody);

let sum = new Function('a', 'b', 'return a + b');
alert( sum(1, 2) ); // 3

let sayHi = new Function('alert("Hello")');
sayHi(); // Hello

`
let str = ... receive the code from a server dynamically ..
let func = new Function(str);
func()
`

