function sumOfDigits(num){
		let sum = 0;
  	while(num > 0){
      let lastDigit = num % 10;
      sum += lastDigit;
      num = Math.floor(num/10);
  	}
  return sum;

}

console.log(sumOfDigits(4136));
