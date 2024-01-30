var person = {
  name: "jaman",
  age: 20,

  address: {
    country: "Bangladesh",
    city: "Dhaka",
  },
};

function printer({ name, age, address: { country, city } }) {
  console.log(name, age, country, city);
}
printer(person);

var student = {
  id: 2013030440,
  name: "Tuhin Ahmed",
  age: 23,
  department: "EEE",
  email: "tuhin453@gmail.com",
};

function reciveStudentData(student, emailSender) {
  let { id, name, department, age, email } = student;
  console.log(name, id, department, age);

  age >= 18 ? emailSender(email) : console.log("not eligable");
}

reciveStudentData(student, (email) => {
  console.log(`Email Send Successfully`);
});
