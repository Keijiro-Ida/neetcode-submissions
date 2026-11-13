class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        const set = new Set<string>();
        let left = 0;
        let longest = 0; 

        for(let r = 0; r < s.length; r++) {
            while(set.has(s[r])) {
                set.delete(s[left]);
                left++;
            }
            set.add(s[r]);
            longest = Math.max(longest, r - left + 1);
        }
        return longest;
    }
}
