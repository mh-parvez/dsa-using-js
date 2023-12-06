
const uniqueKey = Symbol("ID")

const student = {
    name : 'Alamin Milon',
    roll : 45,
    section  : 'B', 
    [uniqueKey] : 3484398348 //Note: Symbole as an objetct key
}

console.log(student)
console.log(Object.keys(student)) //Note: [uniqueKey] is Hidden


//todo: How a methods behind the sences works in javascript?

var title = "javaScript"

//step-1: title ke new String("javaScript") a convert kore
//step-2: conevert parameter into RegExp (/javaScript/) 
//step-3: RegExp er moddhe Symble.search() er implimentation ache kina cheak kore.

class Product {
    constructor(searchValue) {
        this.searchValue = searchValue
    }
    //impliment search
    [Symbol.search](string){ // our own search 
        return string.indexOf(this.searchValue) >= 0 ? "found" : "not found"
    }
}
console.log("javaScript".search("Script")) //can't override the real search

var laptop = new Product("laptop")
console.log("HP laptop".search(laptop)) 




