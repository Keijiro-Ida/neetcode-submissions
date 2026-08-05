class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        const map = {
            ']': '[',
            '}': '{',
            ')': '(',
        };
        const seen = [];
        for(let i = 0; i < s.length; i++) {
            if(!map[s[i]]) {
                seen.push(s[i]);
            } else {
                if(map[s[i]] !== seen.pop()) {
                    return false;
                } 
            }
        }

        return seen.length === 0;
    }
}
