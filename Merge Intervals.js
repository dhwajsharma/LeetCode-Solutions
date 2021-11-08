var merge = function(intervals) {
    if(intervals.length < 2) return intervals;
    
    intervals.sort((a,b) => a[0] - b[0]); // Arr which has smaller element comes first
    
    for(let i = 1; i < intervals.length; i++){
        curr = intervals[i];
        prev = intervals[i-1];
        
        if(curr[0] <= prev[1]){
            intervals[i] = [Math.min(prev[0], curr[0]), Math.max(prev[1], curr[1])];
            intervals.splice(i-1, 1);
            i--; // After merge, the arr become shorter
        }
    }
    return intervals;
};
