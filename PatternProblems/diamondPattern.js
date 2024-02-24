// function printDiamondPattern(n) {
//   for (let row = 1; row <= n; row++) {
//     let res = "";
//     for (let col = row; col <= n; col++) {
//       res += col;
//     }
//     console.log(res);
//   }
//   for (let newRow = 1; newRow <= n - 1; newRow++) {
//     let x = "";
//     for (let newCol = n - newRow; newCol <= n; newCol++) {
//       x += newCol;
//     }
//     console.log(x);
//   }
// }

// printDiamondPattern(7);

function printDiamondPattern(n) {
  for (let row = 1; row <= n; row++) {
    let res = "";
    let space = " ";
    for (let col = row; col <= n; col++) {
      for (let spc = 1; spc <= row - 1; spc++) {
        res += space;
      }
      res += col + " ";
    }
    console.log(res);
  }

  for (let secondHalfRow = 1; secondHalfRow < n; secondHalfRow++) {
    let res2 = "";
    let space2 = " ";
    for (
      let secondHalfCol = n - secondHalfRow;
      secondHalfCol < n + 1;
      secondHalfCol++
    ) {
      for (let spc2 = 1; spc2 <= 2 - secondHalfRow; spc2++) {
        res2 += space2;
      }
      res2 += secondHalfCol + " ";
    }
    console.log(res2);
  }
}
printDiamondPattern(3);
