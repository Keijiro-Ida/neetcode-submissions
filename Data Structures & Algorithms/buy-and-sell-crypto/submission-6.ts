class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let min = Infinity;
        let diff = 0;

        for(const price of prices) {
            if(min > price) {
                min = price;
            }
            if(price - min > diff) {
                diff = price - min;
            }
        }
        return diff;
    }
}
