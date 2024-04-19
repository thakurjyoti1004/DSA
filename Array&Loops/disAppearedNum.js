function findDisAppearedNum(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let indexOfArrEle = arr[i] - 1;

    // checking if any number is already negative/ present.
    if (arr[indexOfArrEle] > 0) {
      arr[indexOfArrEle] = -arr[indexOfArrEle];
    }
  }

  for (let j = 0; j < arr.length; j++) {

    // checking the positve number.
    if (arr[j] > 0) {
      res.push(j + 1);
    }
  }
  console.log(res);
}
findDisAppearedNum([4, 1, 2, 4, 1, 1]);
