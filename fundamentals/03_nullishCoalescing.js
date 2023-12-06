
//todo: nullish coalescing operator '??', when value is null or undeifined

// let user;
// console.log(user ?? "Anonymous"); // Anonymous (user is undefined)

// let user = "John";
// console.log(user ?? "Anonymous"); // John (user is not null/undefined)

var height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50); 
console.log(area); // 5000

// let x = 1 && 2 ?? 3; // Syntax error
let x = (1 && 2) ?? 3; // Works
console.log(x)


//todo: '||' vs '??', 

var height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0, height ?? 100 checks height for being null/undefined, and it’s not

let firstName = 0;
let lastName = null;
let nickName = "Supercoder";

console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // 0
console.log(firstName || lastName || nickName || "Anonymous"); // Supercoder

//note: || returns the first truthy value & ?? returns the first defined value.


