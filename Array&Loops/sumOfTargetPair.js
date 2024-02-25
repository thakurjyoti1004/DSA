/* function targetsumPair(arr,target){
let res =0;
for(let i=0;i<arr.length;i++){
for(let j= arr.length-1;j>i;j--){
  if(arr[i]+arr[j]==target){
    res++;
  }
}
}
console.log(res);
}
targetsumPair([2,3,3,4,5,5,6,9],8); */

function targetPairSum(arr,target){
    let res =0;
    let i=0;
    let j=arr.length-1;
    
        while(j>i){
    
              if(arr[i]+arr[j]===target){
                  res++;
           
                }
                j--;
          if(j==i){
                    i++;
                    j=arr.length-1;
                }
            }
    console.log(res);
    
    
    }
    targetPairSum([1,2,2,3,3,4,4,4,5,5,6,6,6],8);