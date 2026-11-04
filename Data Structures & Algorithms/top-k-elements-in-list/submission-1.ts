class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for(const num of nums) {
            map.set(num, (map.get(num) ?? 0) + 1);
        }

        const buckets: number[][] = Array.from({ length: nums.length + 1}, () => []);

        for(const [num, freq] of map) buckets[freq].push(num);

        const result: number[] = [];
        for(let i = buckets.length - 1; i >= 0; i--) {
            result.push(...buckets[i]);
        }
        return result.slice(0, k);
    }
}
