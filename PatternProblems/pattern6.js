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

  for (let row2 = 1; row2 < n; row2++) {
    let res2 = "";
    for (let col2 = 1; col2 <= row2; col2++) {
      res2 += "_";
    }
    for (let str2 = 1; str2 <= 2 * n - 1 - row2 - row2; str2++) {
      res2 += "*";
    }
    console.log(res2);
  }
}

printPattern(3);
