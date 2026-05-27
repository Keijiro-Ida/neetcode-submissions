/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(root === null) return 0;
        const leftLength = this.maxDepth(root.left);
        const rightLength = this.maxDepth(root.right);
        return Math.max(leftLength, rightLength) + 1;
    }
}
