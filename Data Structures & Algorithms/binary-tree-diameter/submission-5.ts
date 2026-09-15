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

    diameter: number;
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root: TreeNode | null): number {
        if(root === null) return 0;
        this.diameter = 0;
        this.depth(root);
        return this.diameter;
    }

    depth(node: TreeNode | null): number {
        if(node === null) return 0;
        const left = this.depth(node.left);
        const right = this.depth(node.right);
        this.diameter = Math.max(this.diameter, left + right);
        return Math.max(left, right) + 1;
    }
}
