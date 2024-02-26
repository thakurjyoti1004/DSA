function printPattern(n) {
  for (let row = 1; row <= n; row++) {
    let res = "";
    for (let col = 1; col <= n - row + 1; col++) {
      res += "*";
    }
    console.log(res);
  }
}
printPattern(4);
