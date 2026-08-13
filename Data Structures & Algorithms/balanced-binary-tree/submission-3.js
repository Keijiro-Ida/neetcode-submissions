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
     * @return {boolean}
     */
    isBalanced(root) {
        if(root === null) return true;
        const left = this.length(root.left);
        const right = this.length(root.right);
        return Math.abs(left - right) <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    length(node) {
        if(node === null) return 0;
        return Math.max(this.length(node.left), this.length(node.right)) + 1;
    }
}
