
class Student {
    #id
    #semester
    #department

    constructor(name, id, department, semester){
        this.name = name
        this.#id = id
        this.#department = department
        this.#semester = semester
    }
  
    get Information() {
        return `${this.name} ${this.#id} ${this.#department} ${this.#semester}th`
    }
}

const student1 = new Student("Kabir Hasan", "233737788", "CSE", "5")
console.log(student1.Information)
// console.log(student1.name)
// console.log(student1 instanceof Student)


