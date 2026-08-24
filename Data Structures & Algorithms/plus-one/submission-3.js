class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let next = 0;
        for(let i = digits.length - 1; i >= 0; i--) {
            if(digits[i] === 9)  {
                digits[i] = 0;
                next = 1;
            } else {
                digits[i] += 1;
                next = 0;
                break;
            }
        }
        if(next === 1) {
            digits.unshift(1);
        }
        return digits;
    }
}
