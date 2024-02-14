function countSort(array) {
  if (array.length == 0) {
    return arr;
  }

  let max = Math.max(...array);
  const count = new Array(max + 1).fill(0);

  // count the number of occurrences
  for (let i = 0; i < array.length; i++) {
    count[array[i]]++;
  }

  //update count array
  for (let i = 1; i <= max; i++) {
    count[i] += count[i - 1];
  }

  //select the right the position
  const output = new Array(arr.length);

  for (let i = array.length - 1; i >= 0; i--) {
    output[--count[arr[i]]] = arr[i];
  }

  //copy form original array
  for (let i = 0; i < array.length; i++) {
    array[i] = output[i];
  }
  return arr;
}

let arr = [1, 2, 9, 3, 4, 6, 5, 6, 7, 8, 10, 1];
console.log(countSort(arr));
