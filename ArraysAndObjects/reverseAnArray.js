function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function reverseArr(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    swap(arr, i, j);
    i++;
    j--;
  }
  console.log(arr);
}

reverseArr([1, 2, 3, 4]);
reverseArr([5, 7, 12, 0, 6]);
