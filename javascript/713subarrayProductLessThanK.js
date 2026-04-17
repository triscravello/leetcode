// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the prodct of all the elements in the subarray is strictly less than k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // nums[i] >= 1
    // If k is 0 or 1, no product can be strictly less than k.
    if (k <= 1) return 0;
    
    let count = 0;
    let currentProduct = 1;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        // Expand the window by including nums[right]
        currentProduct *= nums[right];

        // Shrink the window from the left if product is too large
        while (currentProduct >= k) {
            currentProduct /= nums[left];
            left++;
        }

        // Number of new subarrays ending at 'right' is equal
        // to the window size: (right - left + 1)
        count += (right - left + 1);
    }

    return count;
};