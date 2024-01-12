let number = 12345;
		let reversedNumber = 0;
     while (number>0){
     
     let remainingNum = number % 10;
     reversedNumber = (reversedNumber * 10) + remainingNum;
     number = Math.floor(number / 10);
     }
console.log(reversedNumber);
