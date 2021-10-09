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
var maxDepth = function(root) {
    
    if(!root) return 0;
    const q = [root];
    let depth = 0;
    
    while(q.length !== 0){
        depth++;
        const len = q.length;
        for(let i = 0; i < len; i++){
            if(q[i].left) q.push(q[i].left);
            if(q[i].right) q.push(q[i].right);
        }
        q.splice(0, len);
    }
    return depth;
};

















