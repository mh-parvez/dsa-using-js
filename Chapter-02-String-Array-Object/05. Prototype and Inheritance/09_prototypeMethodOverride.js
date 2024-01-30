const array = new Array();
array.push(10);

console.log(array);
console.log(Array.prototype);

Array.prototype.printName = function (name) {
  console.log("My name is", name);
};
array.printName("Kabir");

String.prototype.fuck = function (string) {
  console.log("Fuck you 👋🏻 bhootnike", string);
};
var user = "Alex";
user.fuck(user);
