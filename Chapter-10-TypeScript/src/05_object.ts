type Person = {
  name: string;
  age: number;
  isStudent?: boolean;
  address: {
    city: string;
    country: string;
  };
  info: () => string; // methods call signature
};

const person: Person = {
  name: "Pakiza",
  age: 23,
  isStudent: true,
  address: {
    city: "Sylhet",
    country: "Nuwakali",
  },
  info() {
      return `${this.name} ${this.age} ${this.isStudent}`
  },
};

// const person2: Person = {
//   name: "Tithi",
//   age: 23,
//   isStudent: true,
//   address: {
//     city: "Sylhet",
//     country: "Bangladesh",
//   },
// };

console.log(person.info())

