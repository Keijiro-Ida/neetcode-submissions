class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = {
            "]": "[",
            ")": "(",
            "}": "{",
        };
        const stack = [];

        for(let i = 0; i < s.length; i++) {
            if(!map[s[i]]) {
                stack.push(s[i]);
            } else {
                if(map[s[i]] !== stack.pop()) return false;
            }
        }

        return stack.length === 0;
    }
}
