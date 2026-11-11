class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = [];
        const sorted = nums.sort((a, b) => a - b);
        for(let i = 0; i < sorted.length; i++) {
            const num = sorted[i];
            
            if(i > 0 && num === sorted[i - 1]) continue;
            let left = i + 1;
            let right = sorted.length - 1;

            while(left < right) {
                
                const sum = sorted[left] + sorted[right] + num;
                if(sum === 0) {
                    result.push([num, sorted[left], sorted[right]]);
                    left++;
                    right--;
                    while(left < right && sorted[left] === sorted[left - 1]) left++;
                    while(left < right && sorted[right] === sorted[right + 1]) right--;
                } else if(sum > 0) {
                    right--;
                } else {
                    left++;
                }
            }
        }
        return result;
    }
}
