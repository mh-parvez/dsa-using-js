//union and intersection
const inputValue = (value: string | number): string | number => {
  if (typeof value === "string") {
    return "Email Login";
  } else if (typeof value === "number") {
    return "Passworld Login";
  } else {
    throw new Error("invalid input data...");
  }
};

// console.log(inputValue("kabir@gamil.com"));
// console.log(inputValue(true)); //error 💔
// console.log(inputValue(575757));

type PersonInfo = {
  name: string;
  age: number;
};

type Employee = {
  empolyId: number;
  department: string;
};

// type EmployeeDetails = PersonInfo | Employee //union

// const empolye:EmployeeDetails = {
//   name : 'Kabir',
//   age: 32
// }

const personInfo:PersonInfo = {
  name : 'Kabir',
  age: 32
}

const empolye:Employee = {
  empolyId: 57757,
  department: "IT",
}

// type EmployeeDetails = PersonInfo & Employee; //intersection

// const empolye: EmployeeDetails = {
//   name: "Kabir",
//   age: 32,
//   empolyId: 57757,
//   department: "IT",
// };

const createUserProfile = (person: PersonInfo, empolye:Employee) => {
  return {...person, ...empolye};
}
const allDetails: PersonInfo & Employee = createUserProfile(personInfo, empolye);
console.log(allDetails)

