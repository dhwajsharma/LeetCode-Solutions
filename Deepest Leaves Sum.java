/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public int deepestLeavesSum(TreeNode root) {
        Queue<TreeNode> q = new LinkedList();
        q.offer(root);
        
        int level_sum = 0;
        
        while(!q.isEmpty()){
            level_sum = 0;
            
            int size = q.size();
            for(int i=0; i < size; i++){
                TreeNode current_node = q.poll();
                
                level_sum += current_node.val;
                
                if(current_node.left != null)   q.offer(current_node.left);
                if(current_node.right != null)  q.offer(current_node.right);

            }
        }
            return level_sum;
    }
}













