class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const len = nums.length;
        const sum = nums.reduce((a, b) => a + b, 0);
        const expected = Math.floor(len * (len + 1) / 2);
        return expected - sum;
    }
}
