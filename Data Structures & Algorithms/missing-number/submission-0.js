class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    missingNumber(nums) {
        const max = Math.max(...nums);
        for(let i = 0; i < max; i++) {
            if(!nums.includes(i)) {
                return i;
            }
        }
        return max + 1;
    }
}
