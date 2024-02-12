function insertionSort(arr) {
  const array = [...arr];

  for (let i = 1; i < array.length; i++) {
    let temp = array[i];

    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = temp;
  }

  return array;
}

let arr = [9, 3, 5, 3, 2, 1, -1, -40];
console.log(insertionSort(arr));

