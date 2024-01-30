var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// var deleteElement = arr.splice(3, 2, 0) //return delete elements array
var newArray = arr.toSpliced(3, 3); //return new array

// console.log("deleted : ", deleteElement);
console.log("original : ", arr);
console.log("newArray : ", newArray);
