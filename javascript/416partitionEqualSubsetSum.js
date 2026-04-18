// Given an integer array nums, return true if you can partition the array into two subsets such that the sum of the elements in both subsets in both subsets is equal or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const totalSum = nums.reduce((acc, num) => acc + num, 0);

    // If total sum is odd, it's impossible to split into two equal integer subsets
    if (totalSum % 2 !== 0) return false;

    const target = totalSum / 2;
    const dp = new Array(target + 1).fill(false);

    // A sum of 0 is always possible
    dp[0] = true;

    for (const num of nums) {
        // iterate backwards to prevent using the current 'num' more than once
        for (let j = target; j >= num; j--) {
            // a sum j is possible if it was already possible OR
            // if (j - num) was possible
            dp[j] = dp[j] || dp[j - num];
        }
        // early return optimization: if we found the target sum, stop
        if (dp[target]) return true;
    }

    return dp[target];
};