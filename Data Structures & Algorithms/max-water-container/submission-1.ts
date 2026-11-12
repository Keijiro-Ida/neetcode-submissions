class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let result = 0;
        let left = 0, right = heights.length - 1;

        while(left < right) {
            const area = Math.min(heights[left], heights[right]) * (right - left);
            result = Math.max(area, result);
            if(heights[left] > heights[right])  {
                right--;
            } else {
                left++;
            }
        }
        return result;
    }
}
