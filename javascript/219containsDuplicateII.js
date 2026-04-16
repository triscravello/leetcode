// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const lastSeenIndex = new Map();
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (lastSeenIndex.has(val) && (i - lastSeenIndex.get(val) <= k)) {
            return true;
        }
        lastSeenIndex.set(val, i);
    }
    return false;
};