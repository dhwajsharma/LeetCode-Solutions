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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return helper(root, root);
};

const helper = (p, q) => {
    if(p == null && q == null){
        return true;
    }
    if(p == null || q == null){
        return false;
    }
    
    return p.val == q.val && helper(p.left, q.right) && helper(p.right, q.left);
    
    
    
    
    
    
    
    
    
    
}
