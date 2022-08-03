class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return isValid(root, LONG_MIN, LONG_MAX);        
    } 
    
    bool isValid(TreeNode* root, long min, long max){
        if(root == NULL) return true;
        
        if(root->val > min && root->val < max){
            return isValid(root->left, min, root->val) && isValid(root->right, root->val, max);
        }
        return false;
    }
};
