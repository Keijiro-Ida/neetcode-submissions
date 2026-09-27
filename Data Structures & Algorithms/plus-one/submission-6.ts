class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits: number[]): number[] {
        let add = 1;
        for(let i = digits.length - 1; i >= 0; i--) {
            if(digits[i] !== 9) {
                digits[i]++;
                add = 0;
                break;
            } else {
                digits[i] = 0;
            }
        }
        if(add > 0) {
            digits.unshift(add);
        }
        return digits;
    }
}
