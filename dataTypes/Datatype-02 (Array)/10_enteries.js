
//todo: object to array

var obj = {
    a: 10, 
    b: 20
}
console.log(Object.entries(obj))

const fruits = ["apple", "mango", "banana"]

for (const fruit of fruits.entries()) {
    console.log(fruit)
}

//todo: array to object

var objArr = [
    ['a', 10],
    ['b', 20]
]
console.log(Object.fromEntries(objArr))


