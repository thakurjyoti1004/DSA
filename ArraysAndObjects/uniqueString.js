function uniqueStr(arr) {
  let obj = {};
  for (const string of arr) {
    if (!obj[string]) {
      obj[string] = true;
    }
  }
  for (const key in obj) {
    console.log(key);
  }
}
uniqueStr(["abc", "b", "a","b", "abc", "c"]);
