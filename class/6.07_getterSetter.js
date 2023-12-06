
class Student {
    #id
    #department
    #semester

    constructor(name, id, department, semester){

        this.name = name
        this.#id = id
        this.#department = department
        this.#semester = semester
    }
    getInformation() {
        return `${this.name} ${this.#id} ${this.#department} ${this.#semester}th`
    }

    set studentName (updateName) {
        this.name = updateName
    }
    get studentName () {
        return this.name
    }
}

const student1 = new Student("Kabir Hasan", "233737788", "CSE", "5")
console.log(student1.studentName)
student1.studentName = "Hasan Ahmed" 
console.log(student1.studentName)
console.log(student1)



