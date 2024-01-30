const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

//Sorting by type, and return new array
const immutableSort = cars.toSorted((a, b) => {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();

  if (x < y) return -1;
  if (x > y) return 1;
  return 0;
});

console.log(cars);
console.log(immutableSort);
