class FindElements {
    
    private Set<Integer> seen = new HashSet<>();

    public FindElements(TreeNode root) {
        dfs(root, 0);
    }
    
    private void dfs(TreeNode n, int v){
        if(n == null) return;
        seen.add(v);
        n.val = v;
        dfs(n.left,  2 * v + 1);
        dfs(n.right,  2 * v + 2);

    }
    
    public boolean find(int target) {
        return seen.contains(target);
    }
}
