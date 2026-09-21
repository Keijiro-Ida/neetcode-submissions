class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if(n <= 2) {
            return n;
        }
        let before2 = 1;
        let before1 = 2;

        for(let i = 3; i <= n; i++) {
            const curr = before1 + before2;
            before2 = before1;
            before1 = curr;
        }

        return before1;
    }
}
