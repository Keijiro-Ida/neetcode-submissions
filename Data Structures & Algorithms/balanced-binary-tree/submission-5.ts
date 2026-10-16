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
    isBalanced(root: TreeNode | null): boolean {
        if(root === null) return true;
        const left = this.depth(root.left);
        const right = this.depth(root.right);
        return Math.abs(left - right) <= 1 && this.isBalanced(root.left) && this.isBalanced(root.right);
    }
    depth(root: TreeNode | null): number {
        if(root === null) return 0;
        return Math.max(this.depth(root.left), this.depth(root.right)) + 1;
    }
}
