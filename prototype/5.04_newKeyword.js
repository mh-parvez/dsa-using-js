`
When we use new keyword:
Js Provide us this two line.
01. no need to write Object.create()
02. no need to write return function

function Students (name, age, depetment){

    // let student = Object.create(Students.prototype)

    student.name = name
    student.age  = age
    student.department = department

    // return student
}

01. using 'new' keyword, constractor create a new object
02. 'new' keyword provide us 'this' keyword

const student1 = new Students("Salman", 22, "CSE")
`

function Students (name, age, department){

    this.name = name
    this.age  = age
    this.department = department

    this.printer = function () {
        console.log(this.name, this.age, this.department)
    }
}

Students.prototype = {
    nationality : "Bangladeshi",
    university  : "Leading University",
}

const student1 = new Students("Salman", 22, "CSE")
const student2 = new Students("Kamran", 23, "Cevil")

student1.printer()
console.log(student1.department)
console.log(Students.prototype)


