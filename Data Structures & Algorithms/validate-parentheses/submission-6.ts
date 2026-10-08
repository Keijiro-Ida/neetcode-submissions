class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = {
            ']': '[',
            ')': '(',
            '}': '{',
        };
        const stack = [];
        for(const l of s) {
            if(!map[l]) {
                stack.push(l);
            } else {
                if(map[l] !== stack.pop()) return false;
            }
        }
        return stack.length === 0;
    }
}
