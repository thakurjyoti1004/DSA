function printGrid(grid,m,n) {
    let result = "";
    for (let i = 0; i <n; i++) {
      for (let j = 0; j <m; j++) {
        result += grid[j][i] + " ";
      }
    }
    console.log(result);
  }
  printGrid([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ],4,4);
  