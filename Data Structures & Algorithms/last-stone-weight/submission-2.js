class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const arr = [...stones];

        while(arr.length > 1) {
            arr.sort((a, b) => a - b);
            const y = arr.pop();
            const x = arr.pop();

            if(y - x !== 0) {
                arr.push(y - x);
            }
        }
        return arr.length === 0 ? 0: arr[0];
    }
}
