class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let max = 0;

        for(const num of set) {
            if(!set.has(num - 1)) {
                let length = 1;
                let current = num;
                while(set.has(current + 1)) {
                    length++;
                    current++;
                }
                if(max < length) {
                    max = length;
                }
            }
        }

        return max;
    }
}
