
//todo: reset whole array

let x = [1, 2, 3]
let y = x
x = []
console.log(x, y) // not reset proerly

let xx = [1, 2, 3]
let yy = xx
xx.length = 0
console.log(xx, yy) // reset proerly

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
while (numbers.length) { // reset proerly, using loop
    numbers.pop() 
}
console.log(numbers)














