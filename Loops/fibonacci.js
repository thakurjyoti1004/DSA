function printFibonacci(n){
		
    if(n ==0){
    console.log(0);
    return;
}
    
if(n>=1){
    console.log(0);
    console.log(1);
}

let lastNum = 1;
let secondLastNum = 0;

for(let i=2; i<=n;i++){

  let result = lastNum + secondLastNum;
  console.log(result);
  lastNum = result;
  secondLastNum = lastNum;
}
}

printFibonacci(6);
