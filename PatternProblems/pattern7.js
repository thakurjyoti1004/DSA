function printPattern(n) {
  for (let upperHalfRow = 1; upperHalfRow <= (n - 1) / 2; upperHalfRow++) {
    let upperRes = "";
    for (let starCol1 = 1; starCol1 <= upperHalfRow; starCol1++) {
      upperRes += "*";
    }
    for (
      let spaceCol1 = 1;
      spaceCol1 <= n - upperHalfRow - upperHalfRow;
      spaceCol1++
    ) {
      upperRes += "_";
    }
    for (let starCol1 = 1; starCol1 <= upperHalfRow; starCol1++) {
      upperRes += "*";
    }
    console.log(upperRes);
  }

  for (let midRow = 1; midRow <= 1; midRow++) {
    let middleRes = "";
    for (let midCol = 1; midCol <= n; midCol++) {
      middleRes += "*";
    }
    console.log(middleRes);
  }

  for (let lowerHalfRow = 1; lowerHalfRow <= (n - 1) / 2; lowerHalfRow++) {
    let lowerRes = "";
    for (let lowerCol = 1; lowerCol <= (n + 1) / 2 - lowerHalfRow; lowerCol++) {
      lowerRes += "*";
    }
    for (
      let lowerSpaceCol = 1;
      lowerSpaceCol <= 2 * lowerHalfRow - 1;
      lowerSpaceCol++
    ) {
      lowerRes += "_";
    }
    for (let lowerCol = 1; lowerCol <= (n + 1) / 2 - lowerHalfRow; lowerCol++) {
      lowerRes += "*";
    }
    console.log(lowerRes);
  }
}

printPattern(5);
