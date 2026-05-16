class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const appearred = new Set();

        for(const num of nums) {
            if(appearred.has(num)) {
                return true;
            }
            appearred.add(num);
        }
        return false;
    }
}
