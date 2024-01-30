//todo: 1D array: []

var arr = [1, 2, 3, 4, 5]; // litarel
var arr2 = new Array(1, 2, 3, 4, 5, 6); // constranctor
var arr3 = Array(1, 2, 3, 4, 5, 6, 7); // factory

console.log(arr, arr[2], arr[8]);

for (var i = 0; i < arr.length; i++) {
  // console.log(arr[i])
}

//todo: 2D array: [ [], [], [] ]

var arr = [
  [65, 96, 78, 87],
  [90, 85, 90, 83],
  [71, 50, 71, 56],
];
console.log(arr[0][0]);
console.log(arr[1][3]);
console.log(arr[2][1]);

//todo: for of

for (let v of [1, 2, 3, 4, 5]) {
  console.log(v);
}

for (let v of "tanvir") {
  console.log(v);
}
