class Solution {
    public int diameterOfBinaryTree(TreeNode root) {
       
        if(root == null)
            return 0;
        
        int dia = depth(root.right) + depth(root.left);
        int ldia = diameterOfBinaryTree(root.left);
        int rdia = diameterOfBinaryTree(root.right);
        
        return Math.max(dia, Math.max(ldia, rdia));
        
    }
    
    public int depth(TreeNode root){
        if(root == null)
            return 0;
        
        return 1 + Math.max(depth(root.left), depth(root.right));
    }
}
