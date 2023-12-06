
//note: when we pass array as an argument. orginal array will be changed. So array is muteable.

// function updateValues(arr){

//     for (let i = 0; i < arr.length; i++) {
//         arr[i] += 10  
//     }
//     return arr
// }

function updateValues(arr){

    let numbers = arr;

    for (let i = 0; i < numbers.length; i++) {
        numbers[i] += 10  
    }
    return numbers
}


let arr = [2, 7, 9]

console.log(updateValues(arr) )
console.log(arr)



