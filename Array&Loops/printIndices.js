//! Solution-1 => using Brute force O(n^2)
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

//! Solution-2 => using single loop & sort function
function returningIndices(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = [arr[i], i];
  }
  arr.sort((x, y) => {
    return x[0] - y[0];
  });
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    if (arr[i][0] + arr[j][0] === target) {
      return [arr[i][1], arr[j][1]];
    } else if (arr[i][0] + arr[j][0] > target) {
      j--;
    } else {
      i++;
    }
  }
}
let result = returningIndices([4, 1, 3, 10, 5], 6);
console.log(result);
