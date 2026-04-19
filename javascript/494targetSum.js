/**
 * You are given an integer array nums and an integer target.
 * 
 * You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.
 * 
 * For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build expression "+2-1"
 * 
 * Return the number of different expressions that you can build, which evaluates to target.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const sum = nums.reduce((acc, num) => acc + num, 0);

    // target must be reachable and (sum + target) must be even
    if (Math.abs(target) > sum || (sum + target) % 2 !== 0) return 0;

    const subsetTarget = (sum + target) / 2;
    const dp = new Array(subsetTarget + 1).fill(0);
    dp[0] = 1; // Base case: one way to get sum 0 in empty subset

    for (let num of nums) {
        // iterate backwards to avoid using the same element more than once
        for (let j = subsetTarget; j >= num; j--) {
            dp[j] += dp[j - num];
        }
    }

    return dp[subsetTarget];
};