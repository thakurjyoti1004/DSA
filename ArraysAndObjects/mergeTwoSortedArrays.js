function mergeTwoSortedArray(num1, num2, m, n) {
  let result = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    if (num1[i] < num2[j]) {
      result[k] = num1[i];
      i++;
      k++;
    } else {
      result[k] = num2[j];
      j++;
      k++;
    }
  }
  while (i < m) {
    result[k] = num1[i];
    i++;
    k++;
  }
  while (j < n) {
    result[k] = num2[j];
    j++;
    k++;
  }
  for (let i = 0; i < result.length; i++) {
    num1[i] = result[i];
  }
  console.log(num1);
}
mergeTwoSortedArray([1, 2, 3, 4], [3, 4, 6], 4, 3);
