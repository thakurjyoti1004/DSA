let a = 9;
let b = 12;
let gcd = 0;

for (let i = 1; i <= a && b; i++) {
  if (a % i == 0 && b % i == 0) {
    gcd = i;
  }
}
let lcd = (a * b) / gcd;
console.log(lcd);
