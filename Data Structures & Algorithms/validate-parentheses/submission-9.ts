class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if(s.length % 2 === 1) return false;
        const map: Record<string, string> = { ']': '[', '}': '{', ')': '(' };
        const stack: string[] = [];
        for(const c of s) {
            if(!map[c]) stack.push(c);
            else if(stack.pop() !== map[c]) return false;
        }
        return stack.length === 0;
    }
}
