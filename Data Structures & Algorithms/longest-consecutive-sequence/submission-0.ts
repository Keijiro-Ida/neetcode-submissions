class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        
        let max = 0;
        for(const num of nums) {
            if(!set.has(num - 1)) {
                let current = num;
                let length = 1;
                while(set.has(current + 1)) {
                    length++;
                    current++;
                }
                if(length > max) max = length;
            }
        }

        return max;
    }
}
