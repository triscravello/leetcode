// Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *    this.val = (val===undefined ? 0 : val);
 *    this.left = (left===undefined ? null : left);
 *    this.right = (right===undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const seen = new Set();

    function dfs(node) {
        if (!node) return false;

        // Check if the complement exists in the set
        if (seen.has(k - node.val)) {
            return true; // found a pair that sums to k
        }

        seen.add(node.val); // add current node value to the set

        // continue searching in left and right subtrees
        return dfs(node.left) || dfs(node.right);
    }

    return dfs(root);
}