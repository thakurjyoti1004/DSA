function maxConsecutiveOnes(arr) {
  let maxConsecutiveOnes = 0;
  let finalRes = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      maxConsecutiveOnes += 1;
    } else {
      finalRes = Math.max(finalRes, maxConsecutiveOnes);
      maxConsecutiveOnes = 0;
    }
  }
  console.log(finalRes);
}

maxConsecutiveOnes([0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0]);
