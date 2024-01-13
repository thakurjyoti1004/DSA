function leastCommonfactor(a, b) {
  let gcd = 0;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      gcd = i;
    }
  }
  let lcd = (a * b) / gcd;
  return lcd;
}

console.log(leastCommonfactor(9, 12));
