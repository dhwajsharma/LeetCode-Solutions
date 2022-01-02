var searchBST = function(root, val) {
    let res = null;
    const helper = (node) => {
        if(!node) return;
        
        if(node.val === val){
            res = node;
            return;
        }
        if(val < node.val) helper(node.left);
        if(val > node.val) helper(node.right);
    }
    
    helper(root);
    return res;
};
