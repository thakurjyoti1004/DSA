function decimalToBinary(num){
	let ans = "";
	while(num>0){
  	if(num%2 ==0){
    	ans = "0" + ans;
    }
    else{
    ans = "1"+ans;
    }
    num= Math.floor(num/2);
  }
 return ans;
 
}

console.log(decimalToBinary(34));