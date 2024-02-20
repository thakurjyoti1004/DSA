function printDiamondPattern(n) {
  for (let row = 1; row <= n; row++) {
    let res = "";
    for (let col = row; col <= n; col++) {
      res += col;
    }
    console.log(res);
  }
  for (let newRow = 1; newRow <= n - 1; newRow++) {
    let x = "";
    for (let newCol = n - newRow; newCol <= n; newCol++) {
      x += newCol;
    }
    console.log(x);
  }
}

printDiamondPattern(7);
