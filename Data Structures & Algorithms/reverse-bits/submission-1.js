class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        // 32ビットの2進数文字列に変換（先頭ゼロ埋め）
        const binary = n.toString(2).padStart(32, '0');
        // 文字列を反転
        const reversed = binary.split('').reverse().join('');
        // 10進数に戻す
        return parseInt(reversed, 2);
    }
}
