class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        let prev1 = 0, prev2 = 0;

        for(let i = 2; i <= cost.length; i++) {
            const curr = Math.min(cost[i - 2] + prev2, cost[i - 1] + prev1);
            prev2 = prev1;
            prev1 = curr;            
        }

        return prev1;
    }
}
