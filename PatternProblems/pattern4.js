function printPattern(n) {
  for (let row = 1; row <= n; row++) {
    let res = "";
    for (let col = 1; col <= n - row; col++) {
      res += "_";
    }
    for (let str = 1; str <= row - 1 + row; str++) {
      res += "*";
    }
    console.log(res);
  }
}
printPattern(5);
