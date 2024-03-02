function printGrid(grid) {
  let result = "";
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      result += grid[i][j] + " ";
    }
  }
  console.log(result);
}
printGrid([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
]);
