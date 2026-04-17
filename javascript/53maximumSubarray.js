// Given an integer array nums, find the subarray with the largest sum, and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Initialize currentSum and maxSum with the first element of the array
    let currentSum = nums[0];
    let maxSum = nums[0];

    // Iterate through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Decide whether to start a new subarray or extend the existing array
        currentSum = Math.max(nums[i], currentSum + nums[i]);

        // Update the global maximum if current subarray sum is larger
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};