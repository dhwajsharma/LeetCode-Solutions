/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 1) return 0;
    
    let maxprofit = 0;
    for(let i = 1; i < prices.length; i++){
        maxprofit += Math.max(0, prices[i] - prices[i-1])
    }
    return maxprofit;
};
