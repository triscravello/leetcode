/**
 * You are given an integer array nums and two integers indexDiff and valueDiff.
 * 
 * Find a pair of indices (i, j) such that:
 * i != j, (the indices must be different)
 * abs(i - j) <= indexDiff, (the distances between indices must not exceed indexDiff)
 * abs(nums[i] - nums[j]) <= valueDiff, (the differences between the values at these indices must not exceed valueDiff) and
 * 
 * Return true if such pair exists or false otherwise.
 */

/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    const window = [];

    const binarySearch = (target) => {
        let left = 0, right = window.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (window[mid] < target) left = mid + 1;
            else right = mid;
        }
        return left;
    }

    for (let i = 0; i < nums.length; i++){
        // find the smallest value >= (nums[i] - valueDiff)
        const ceilValue = binarySearch(nums[i] - valueDiff);

        // If such value exists and is <= (nums[i] + valueDiff), we found a valid pair
        if (ceilValue < window.length && Math.abs(window[ceilValue] - nums[i]) <= valueDiff) {
            return true;
        }

        // insert into sorted position
        window.splice(binarySearch(nums[i]), 0, nums[i]);

        // Maintain sliding window of size indexDiff
        if (i >= indexDiff) {
            let removeIndex = binarySearch(nums[i - indexDiff]);
            window.splice(removeIndex, 1);
        }
    }

    return false;
};