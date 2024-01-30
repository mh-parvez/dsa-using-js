//todo: primetives value
let a = 20;
let b = 10;

b = a; //copy
a = 50;

console.log(a, b);

//todo: reference value
let userOne = {
  userName: "Lupin",
  age: 20,
};

// let userTwo = userOne // reference copying
let userTwo = { ...userOne }; // new object

// console.log(userOne)
// console.log(userTwo)

userOne.age = 30;

console.log(userOne);
console.log(userTwo);

//todo: nested copy
var language = {
  langName: "javascript",
  estd: "1995",
  libraries: ["react", "vue", "solid"],
};

var language2 = {
  // shallow copy
  ...language,
};

language.libraries.push("anguler");

console.log(language);
console.log(language2);

//todo: other case
var player = "sakib";

console.dir(player); //এখানে কোনো মেথড নেই, এইজন্য
console.log(player.charAt(2)); // prototype chaining করে String() থেকে মেথড নিয়ে আসে

var player2 = new String("sakib"); // wrapper type
console.log(player.charAt(2)); // it's prototype method

console.dir(player2);

//todo: other case
const student = {
  name: "Alamin Milon",
  roll: 45,
  section: "B",
};

function studentsInfo(student) {
  //   student = {}; //assgiment, local variable
  student.name = "tamim"; // muted

  console.log(student);
}

studentsInfo(student); //everything, pass by reference
console.log(student);
