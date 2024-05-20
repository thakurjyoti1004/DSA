// print continuous sub-array
function printSubArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    let res = " ";
    for (let j = i; j < arr.length; j++) {
      res += arr[j];
      console.log(res);
    }
  }
}
printSubArr([1, 2, 3, 4]);
