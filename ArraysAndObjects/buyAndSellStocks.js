function buyAndSellStocks(prices) {
  let minVal = Number.MAX_VALUE;
  let maxVal = Number.MIN_VALUE;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minVal) {
      minVal = prices[i];
    }
  }
  for (let i = prices.indexOf(minVal); i < prices.length; i++) {
    if (prices[i] > maxVal) {
      maxVal = prices[i];
    }
  }
  if (maxVal > 0) {
    let profit = maxVal - minVal;
    return profit;
  } else {
    return 0;
  }

  //   let minValue = prices[0];
  //   let profit = 0;
  // 	for(let i=1;i<prices.length;i++){
  //   	if(prices[i]<minValue){
  //     	minValue = prices[i];
  //     }
  //     if(prices[i]>minValue){
  //     	profit = Math.max(profit,prices[i]-minValue);
  //     }
  //   }
  // return profit;
}
let stocksResult = buyAndSellStocks([7, 1, 4, 3, 10]);
console.log(stocksResult);
