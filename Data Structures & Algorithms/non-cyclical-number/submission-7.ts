class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
        const seen = new Set();
        while(n !== 1 && !seen.has(n)) {
            seen.add(n);
            n = this.getSum(n);
        }
        return n === 1;
    }

    getSum(n: number): number {
        let result = 0;

        while(n > 0) {
            const num = n % 10;
            result += num * num;
            n = Math.floor(n / 10);
        }
        return result;
    }
}
