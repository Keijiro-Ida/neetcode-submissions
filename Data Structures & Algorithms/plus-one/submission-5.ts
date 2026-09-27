class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let num = 0;
        for(let i = digits.length - 1; i >= 0; i--) {
            if(digits[i] !== 9) {
                digits[i]++;
                num = 0;
                break;
            } else {
                digits[i] = 0;
                num = 1;
            }
        }
        if(num > 0) {
            digits.unshift(1);
        }
        return digits;
    }
}
