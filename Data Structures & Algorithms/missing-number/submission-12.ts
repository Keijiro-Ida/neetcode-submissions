class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const len = nums.length;
        const expected = len * (len + 1) / 2;
        const sum = nums.reduce((a, b) => a + b, 0);
        return expected - sum;
    }
}
