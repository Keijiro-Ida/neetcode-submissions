class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let zeroCount = 0;
        let productWithoutZero = 1;
        for(const num of nums) {
            if(num === 0) zeroCount++;
            else productWithoutZero *= num;
        }

        return nums.map(num => {
            if(zeroCount > 1) return 0;
            if(zeroCount === 1) return num === 0 ? productWithoutZero : 0;
            return productWithoutZero / num;
        })
    }
}
