/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0, max = 0;
    let set = new Set();
    
    while(j < s.length){
        if(!set.has(s[j])){
            set.add(s[j++]);
            max = Math.max(max, set.size);
        } else{
            set.delete(s[i++]);
        }
    }
    return max;
};
