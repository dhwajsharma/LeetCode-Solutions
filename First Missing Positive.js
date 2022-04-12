var firstMissingPositive = function(nums) {
    nums = Array.from(new Set(nums));
    nums.sort((a,b) => a-b).filter(num => num > 0);
    let j = 1;
    for (let i = 0; i < nums.length; i++) {
        if (j == nums[i]) j++;
        else return j;
    }
    return j;
    // Time Complexity: O(nlog(n))
    // Space Complexity: O(n)
};
