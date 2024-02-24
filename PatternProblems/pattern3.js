function printPattern(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    for (let col = 1; col <= n - row; col++) {
      str += "_";
    }
    for (let k = 1; k <= row; k++) {
      str += "*";
    }
    console.log(str);
  }
}

printPattern(3);
