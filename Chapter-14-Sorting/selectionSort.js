function selectionSort(arr) {
  const array = [...arr];

  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min != i) {
      let temp = array[min];
      array[min] = array[i];
      array[i] = temp;
    }
  }

  return array;
}

let arr = [8, 4, 2, 1, 0, -30];
console.log(selectionSort(arr));
