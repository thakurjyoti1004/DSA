function printIndices(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum === target) {
        result.push(i, j);
      }
    }
  }

  console.log(result);
}

printIndices([2, 7, 11, 15], 9);
