const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sliced = arr.slice(2, 5); // slice, and new array
console.log(sliced);

const cloned = arr.slice(); // clone
console.log(cloned);

const anoClone = [...arr];
console.log(anoClone);
