function test() {}
// console.log(test.prototype)
// console.dir(test)

//* JavaScript all funciton by default constrctor function, and we can create objects using constrctor
//* Every constactor have prototype, and here we can add our own methods and properties.
//* Prototype: Prototype is an, every javascript function property who point an object.
//* Object.create() helps to inherit parent property to child objects

function Students(name, age, department) {
  let student = Object.create(Students.prototype);

  student.name = name;
  student.age = age;
  student.department = department;

  return student;
}

Students.prototype = {
  nationality: function () {
    console.log("Bangladeshi");
  },
  university: function () {
    console.log("Leading University");
  },
};

const student1 = Students("Salman", 22, "CSE");
const student2 = Students("Kamran", 23, "Cevil");

Students.prototype.university();
student1.university();

Students.prototype.play = "they are playing with girl";
console.dir(Students.prototype);

console.log(student1);
