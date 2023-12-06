
class Student {
    #id
    #department
    #semester

    constructor(name, id, department, semester) {
        this.name = name
        this.#id = id
        this.#department = department
        this.#semester = semester
    }

    getInformation() {
        return `${this.name} ${this.#id} ${this.#department} ${this.#semester}th`
    }

    static country(student1) { //idependent
        // return `${this.name} countery is Bangladesh` // no connection between this
        return `${student1.name} countery is Bangladesh`
    }
}

const student1 = new Student("Kabir Hasan", "233737788", "CSE", "5")

console.log(student1.getInformation())
console.log(student1.name)
console.log(Student.country(student1))  // like Array.isArray()
// console.log(student1.country()) // error


