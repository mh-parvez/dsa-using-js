`
Property getters and setters
There are two kinds of object properties.

The first kind is data properties. We already know how to work with them. All properties that we've been using until now were data properties.

The second type of property is something new. Its an accessor property. They are essentially functions that execute on getting and setting a value, but look like regular properties to an external code.
`;

//todo: Now we want to add a fullName property, that should be "John Smith".

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

console.log(user.fullName); // John Smith
// user.fullName = "Test"; // Error (property has only a getter)

// set fullName is executed with the given value.
user.fullName = "Alice Cooper";
console.log(user.name); // Alice
console.log(user.surname); // Cooper
