let a = 28;
let b = 24;
let gcd = 0;

for (let i = 1; i < a && b; i++) {
  if (a % i == 0 && b % i == 0) {
    gcd = i;
  }
}
console.log(gcd);
