function asseendingSort(arr) {
  let array = [...arr];

  for (let i = 0; i < array.length - 1; i++) {
    let swapFlag = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapFlag = true;
      }
    }
    if (!swapFlag) {
      break;
    }
  }
  return array;
}

function desendingSort(arr) {
  let array = [...arr];

  for (let i = 0; i < array.length - 1; i++) {
    let swapFlag = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] < array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapFlag = true;
      }
    }
    if (!swapFlag) {
      break;
    }
  }
  return array;
}

let arr = [9, 3, 5, 3, 2, 1, -1, -40];
console.log(asseendingSort(arr));
console.log(desendingSort(arr));
