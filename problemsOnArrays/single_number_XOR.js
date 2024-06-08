function singleNum(arr) {
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    res = res ^ arr[i];
  }
  return res;
}
const finalResult = singleNum([4, 3, 2, 3, 4]);
console.log(finalResult);
 