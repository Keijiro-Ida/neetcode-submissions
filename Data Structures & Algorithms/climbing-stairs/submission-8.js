class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(n < 3) return n;
        let prev1 = 2; let prev2 = 1;

        for(let i = 3; i <= n; i++) {
            const curr = prev1 + prev2;
            prev2 = prev1;
            prev1 = curr;
        }
        return prev1;
    }
}
