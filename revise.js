function revArr(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    if (arr[i] == 1) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j--;
    } else {
      i++;
    }
  }
  console.log(arr);
}
revArr([0, 1, 1, 0, 0, 1]);
