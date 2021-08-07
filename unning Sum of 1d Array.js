/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    nums.reduce((acc, curr, index, arr) => arr[index] += acc)
    return nums
};
