

function showName() {
    // it's iterable
    for (let arg of arguments) console.log(arg);
}
showName("Julius", "Caesar");


function sumAll(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6



