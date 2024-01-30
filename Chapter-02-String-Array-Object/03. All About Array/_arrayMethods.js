//todo: forEach : return value, index, and full array

var arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function (value, index, arr) {
  // console.log(value)
  // console.log(index)
  // console.log(arr)
  sum += value;
});
console.log(sum);

//forEach implementation
function myforEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
myforEach(arr, function (value, index, arr) {
  console.log(value, index, arr);
});

//todo: map: return new array, not modify the original.

var arr = [1, 2, 3, 4];

var sqtArr = arr.map(function (element, index, arr) {
  // console.log(element)
  return element + 100;
});
console.log(sqtArr);

//how to make?
function myMap(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    // var temp  = arr[i] * arr[i] //!callback line
    var temp = cb(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}

var qb = myMap(arr, function (value) {
  return value * value * value;
});
console.log(qb);

//todo: filter

var arr = [4, 6, 5, 3, 8, 1, 9, 7];

var filterArr = arr.filter(function (value) {
  return value > 4;
});
console.log(filterArr);

//implementation?
var array = [34, 556, 6, 56, 5656];

function myfilter(arr, callback) {
  var newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  myfilter(array, function (value, i, arr) {
    //  console.log(value, i, arr)
    return value > 100;
  })
)(
  //todo: reduce

  (function () {
    var arr = [1, 2, 4, 6, 7, 8, 9];

    var sum = arr.reduce(function (prev, curr) {
      return prev + curr;
    });

    var max = arr.reduce(function (prev, curr) {
      return Math.max(prev, curr);
    }, arr[0]);

    console.log(sum, max);

    //implementation?
    function myReduce(arr, cb, acc) {
      for (var i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i]);
      }
      return acc;
    }

    var sum = myReduce(
      arr,
      function (prev, curr) {
        // console.log(prev)
        // console.log(curr)
        return prev + curr;
      },
      arr[0]
    );

    var min = myReduce(
      arr,
      function (prev, curr) {
        return Math.min(prev, curr);
      },
      arr[0]
    );

    var max = myReduce(
      arr,
      function (prev, curr) {
        return Math.max(prev, curr);
      },
      0
    );

    console.log(sum, min, max);
  })()
);

//todo: every and some

var res1 = arr.every(function (value) {
  return value % 2 === 0;
});
console.log(res1);

var res3 = arr.some(function (value) {
  return value % 2 === 0;
});
console.log(res3);

//todo: find and findIndex

var arr = [7, 5, 8, 2, 1, 9, 7, 3, 6];

var result1 = arr.find((v) => v === 9);
var result2 = arr.findIndex((v) => v === 9);

console.log(`value : ${result1}, index : ${result2}`);

//How to make?
function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i]; //find element
      // return i //find index of element
    }
  }
}

var result3 = myFind(arr, function (value) {
  return value === 9;
});
console.log(result3);
