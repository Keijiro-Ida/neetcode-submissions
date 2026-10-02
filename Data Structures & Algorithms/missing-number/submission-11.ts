class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums: number[]): number {
        const len = nums.length;
        const sum = nums.reduce((sum, num) => sum + num, 0);
        const expected = len * (len + 1) / 2;
        return expected - sum;
    }
}
