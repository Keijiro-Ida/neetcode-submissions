class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n) {
        const result = [];

        for(let i = 0; i <= n; i++) {
            result[i] = this.countOnes(i);
        }
        return result;
    }

    countOnes(n) {
        let count = 0;
        while(n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }
}
