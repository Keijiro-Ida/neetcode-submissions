class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set<string>();
        let l = 0;
        let result = 0; 

        for(let r = 0; r < s.length; r++) {
            while(set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            result = Math.max(result, r - l + 1);
        }
        return result;
    }
}
