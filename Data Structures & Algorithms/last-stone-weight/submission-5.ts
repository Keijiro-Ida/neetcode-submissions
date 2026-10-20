class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        while(stones.length > 1) {
            stones.sort((a, b) => a - b);
            const before = stones.pop();
            const after = stones.pop();
            if(before !== after) {
                stones.push(before - after);
            }
        }
        return stones.length === 0 ? 0 : stones[0];
    }
}
