//Note: when we pass array as an argument. orginal array will be changed. So array is muteable.

function updateValues(arr) {
  
  let numbers = arr; //mutable, copy reference
  // let numbers = [...arr]; //immutable, create a new reference array
  // console.log(numbers)

  for (let i = 0; i < numbers.length; i++) {
    numbers[i] += 10;
  }
  return numbers;
}

let arr = [2, 7, 9];

console.log(updateValues(arr)); //pass by reference
console.log(arr);
