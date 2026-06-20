class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity;
        let profit = 0;

        for(let i = 0; i < prices.length; i++) {
            if(min > prices[i]) min = prices[i];
            if(prices[i] - min > profit) {
                profit = prices[i] - min;
            }
        }
        return profit;
    }
}
