class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n: number): number {
        if(n < 3) return n;
        let before1 = 1;
        let before2 = 2;

        for(let i = 3; i <= n; i++) {
            const curr = before1 + before2;
            
            before1 = before2;
            before2 = curr;
        }
        return before2;
    }
}
