class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let min = Infinity;
        let profit = 0;

        for(const price of prices) {
            min = Math.min(min, price);
            profit = Math.max(profit, price - min);
        }

        return profit;

    }
}
