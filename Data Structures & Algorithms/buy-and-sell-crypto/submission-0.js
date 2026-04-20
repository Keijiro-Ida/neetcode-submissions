class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let result = 0;

        for(const price of prices) {
            if(price < minPrice) {
                minPrice = price;
            }
            if(price > minPrice) {
                result = Math.max(result, price - minPrice);
            }
        }
        return result;
    }
}
