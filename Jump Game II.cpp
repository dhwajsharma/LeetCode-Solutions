class Solution {
public:
    int jump(vector<int>& arr) {
        if(arr.size()==1){
            return 0;// return 0 if arr size is 1 , as we are already standing on the end of array
         }
        int dp[arr.size()];
        memset(dp,0,arr.size()*4); // set all values to 0 . Memset can be used to set only 0 or -1 in case of integer array . Just revising :). 
        dp[0]=0; // setting initial value to 0
        int l=1;// index to be updated next - this makes solution O(N) as below for loop runs for N times only :) .
        for(int i=0;i<arr.size();i++){
            if(dp[arr.size()-1]){
                return dp[arr.size()-1]; // return as soon as we update our last position .
            }
            while(l<=(arr[i]+i) && l<arr.size()){// Update those positions which are greater than equal to next updating index .
                dp[l++]=dp[i]+1; // update the positions that are reachable from present index 
            }
        }
        return dp[arr.size()-1]; // No need . Just needed to return as program never reaches here .
        
    }
};
