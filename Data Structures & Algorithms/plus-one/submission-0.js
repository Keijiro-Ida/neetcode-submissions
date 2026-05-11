class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let add = 1;

        for(let i = digits.length - 1; i >= 0; i--) {
            const sum = digits[i] + add;

            if(sum === 10) {
                digits[i] = 0;
                add = 1;
            } else {
                digits[i] = sum;
                add = 0;
            }
        }
        if(add === 1) {
            digits.unshift(1);
        }
        return digits;
    }
}
