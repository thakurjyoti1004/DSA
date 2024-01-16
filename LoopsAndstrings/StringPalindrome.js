function palindrome(num){
	let x = "" + num;
    
	for(let i=0; i<=(x.length)/2; i++){
  	if(x[i]!==x[x.length-1]){
    	return "No";
    }
    else{
    return "yes";
    }
    
  }
 
}

console.log(palindrome(1221));