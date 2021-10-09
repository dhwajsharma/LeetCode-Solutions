/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    
    // if null return empty array
    if(root == null) return [];
    
    // if no children then return the node value itself as a string
    else if(root.left == null && root.right == null) return [`${root.val}`];
    
    else{
        
        // for all child paths add the root to their head one by one.
        let left = binaryTreePaths(root.left).map(x => root.val + "->" + x);
        let right = binaryTreePaths(root.right).map(x => root.val + "->" + x);
        
        // return the array with the root value attached
        return [...left, ...right];

    }
    
};

















