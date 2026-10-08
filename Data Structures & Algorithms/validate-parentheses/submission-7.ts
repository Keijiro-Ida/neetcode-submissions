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
        for(const c of s) {
            if(!map[c]) {
                stack.push(c);
            } else {
                if(map[c] !== stack.pop()) return false;
            }
        }
        return stack.length === 0;
    }
}
