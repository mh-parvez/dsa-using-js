`
When inherit, Three Rolls
01. Inherit this Object
02. Inherit prototypes of those function
03. constactor method overriding
`;

function Person(name, age) {
  // parent-class
  this.name = name;
  this.age = age;
}

function Crickter(name, age, type, country) {
  // sub-class

  Person.call(this); //! 01. Person.this to Cricker.this

  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat: function () {
    console.log(this.name, "is eating");
  },
};

Crickter.prototype = Object.create(Person.prototype); //! 02. Person.prototype to Crickter.prototype
Crickter.prototype.constructor = Crickter; //! 03. Method Overriding

Crickter.prototype.dance = function () {
  console.log(this.name, "is dancing");
};

const sakib = new Crickter("Sakib", 32, "All rounder", "Bangladesh");

console.log(sakib);
console.log(sakib.eat());
console.log(sakib.dance());
