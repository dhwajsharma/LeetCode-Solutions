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
 * @return {number}
 */
var goodNodes = function(root) {
    let counter = 0;
    
    const preOrder = (node, maxValue) => {
        if(!node) return;
        
        if(node.val >= maxValue){
            counter++;
            maxValue = node.val;
        }
        preOrder(node.left, maxValue);
        preOrder(node.right, maxValue);
    }
    
    preOrder(root, -Number.MAX_VALUE);
    return counter;
};















