class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones: number[]): number {
        const arr = [...stones];
        

        while(arr.length > 1) {
            arr.sort((a, b) => a - b);
            const before = arr.pop();
            const curr = arr.pop();
            if(before !== curr) {
                arr.push(before - curr);
            }
        }
        return arr.length === 1 ? arr[0] : 0;
    }
}
