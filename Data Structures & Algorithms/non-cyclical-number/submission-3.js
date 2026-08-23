class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const seen = new Set();

        while(n != 1 && !seen.has(n)) {
            seen.add(n);
            n = this.sumOfSquares(n);
        }
        return n === 1;
    }

    sumOfSquares(n) {
        let result = 0;
        while(n > 0) {
            result += (n % 10) * (n % 10);
            n = Math.floor(n / 10);
        }
        return result;
    }
}
