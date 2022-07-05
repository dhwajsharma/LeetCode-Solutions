/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascal = [];
    
    for(let i = 0; i < numRows; i++){
        
        pascal[i] = [];
        pascal[i][0] = 1;
        
        for(let j = 1; j < i; j++){
            
            // in the children arr, the value of j indexed item is = prev array's left item[j-1] + right item[j]
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
        }
        
        // finish the loop with adding 1 in the end for every child array
        pascal[i][i] = 1;
    }
    
    return pascal;
};
