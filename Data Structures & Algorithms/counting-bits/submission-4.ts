class Solution {
    /**
     * @param {number} n
     * @return {number[]}
     */
    countBits(n: number): number[] {
        const result: number[] = [];

        for(let i = 0; i <= n; i++) {
            result.push(this.countOne(i));
        }
        return result;
    }

    countOne(n: number): number {
        let result = 0;
        while(n > 0) {
            n = n & (n - 1);
            result++;
        }
        return result;
    }
}
