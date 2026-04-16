// Given an integer array nums and an integer k, return the maximum length of a subarray that sums to k. If there is not one, return 0 instead.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
var maxSubArrayLen = function(nums, k) {
    const map = new Map();

    // Initialize with 0: -1 to handle subarrays starting from index 0
    map.set(0, -1);

    let currentSum = 0;
    let maxLength = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        // Check if (currentSum - k) exists in map
        // If currentSum - target = k, then target = currentSum - k
        if (map.has(currentSum - k)) {
            maxLength = Math.max(maxLength, i - map.get(currentSum - k));
        }

        // Only add currentSum to map if it's not already there
        // This ensures we keep the leftmost index to maximize length
        if (!map.has(currentSum)) {
            map.set(currentSum, i);
        }
    }

    return maxLength;
}