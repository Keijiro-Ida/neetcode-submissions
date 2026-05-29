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

        const leftHeight = this.height(root.left);
        const rightHeight = this.height(root.right);

        return Math.abs(leftHeight - rightHeight) <= 1 &&
            this.isBalanced(root.left) && this.isBalanced(root.right);
    }

    height(node) {
        if(node === null) return 0;
        return Math.max(this.height(node.left), this.height(node.right)) + 1;
    }
}
