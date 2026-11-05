class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {

        let result: string[] = [];
        for(let str of strs) {
            result.push(str.length + '#' + str);
        }
        return result.join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {

        let i = 0;
        let result = [];
        while(i < str.length) {
            const j = str.indexOf('#', i);
            const num = Number(str.slice(i, j));
            result.push(str.slice(j + 1, j + num + 1));
            i = j + num + 1;
        }
        return result;
    }
}
