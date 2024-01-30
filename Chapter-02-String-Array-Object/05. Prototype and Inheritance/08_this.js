//todo: 03. 'new' binding: when contractor gave us an objects called 'this'

function Students(name, age, department) {
  this.name = name;
  this.age = age;
  this.department = department;

  this.printer = function () {
    console.log(this.name, this.age, this.department);
  };
}
const student1 = new Students("Jobbar", "21", "BBA");
student1.printer();

//todo: 04. window binding: by default 'this' means window. we can stop by default mode, using "use strict"

("use strict"); // now show error

var printName = function (name) {
  // console.log(this)
  // console.log(this === window)
  console.log(this.name); //no error
};
var person = {
  name: "Sakib",
};

printName("Kabir");
