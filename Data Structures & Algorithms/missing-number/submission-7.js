class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const n = nums.length;
        const expected = n * (n + 1) / 2;
        const sum = nums.reduce((sum, num) => sum + num, 0);
        return expected - sum;
    }
}
