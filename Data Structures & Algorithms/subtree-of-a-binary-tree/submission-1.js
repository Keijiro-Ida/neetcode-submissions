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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if(subRoot === null) return true;
        if(root === null) return false;
        if(this.isSameTree(root, subRoot)) return true;

        return this.isSubtree(root.left, subRoot) || this.isSubtree(root.right, subRoot);
    }

    isSameTree(s, t) {
        if(s === null && t === null) return true;
        if(s === null || t === null) return false;
        if(s.val !== t.val) return false;
        return this.isSameTree(s.left, t.left) && this.isSameTree(s.right, t.right);
    }

    
}
