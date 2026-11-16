class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length) return false;

        const A = 'a'.charCodeAt(0);
        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);
        let left = 0;
        for(let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - A]++;
        }
        for(let right = 0; right < s2.length; right++) {
            count2[s2.charCodeAt(right) - A]++;
            if(right - left + 1 > s1.length) {
                count2[s2.charCodeAt(left) - A]--;
                left++;
            }
            if(this.isSame(count1, count2)) {
                return true;
            }
        }
        return false;
    }

    private isSame(a: number[], b: number[]): boolean {
        for(let i = 0; i < 26; i++) {
            if(a[i] !== b[i]) return false;
        }
        return true;
    }
}
