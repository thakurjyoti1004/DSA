function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function reArrangeArray(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] == 1) {
      swap(arr, i, j);
      j--;
    } else {
      i++;
    }
  }
  return arr;
}

console.log(reArrangeArray([0, 1, 1, 0, 1, 0]));
