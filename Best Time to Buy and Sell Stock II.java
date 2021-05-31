class Solution {
    public int maxProfit(int[] prices) {
        int n = prices.length, lastBuy = -prices[0], lastSold = 0;
        if(n == 0) return 0;
        
        for(int i = 1; i < n; i++){
            int curBuy = Math.max(lastBuy, lastSold - prices[i]);
            int curSold = Math.max(lastSold, lastBuy + prices[i]);
            lastBuy = curBuy;
            lastSold = curSold;
        }
        return lastSold;
    }
}
