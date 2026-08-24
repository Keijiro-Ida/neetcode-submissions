class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let add = 1;
        for(let i = digits.length - 1; i >= 0; i--) {
            if(digits[i] === 9)  {
                digits[i] = 0;
            } else {
                digits[i] += add;
                add = 0;
                break;
            }
        }
        if(add === 1) {
            digits.unshift(1);
        }
        return digits;
    }
}
