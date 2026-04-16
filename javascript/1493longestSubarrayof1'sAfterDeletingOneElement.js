/**
 * Given a binary array nums, you should delete one element from it.
 
 * Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.
*/

/**
 * @param {number[]} nums
 * @return {number}
*/
var longestSubarray = function(nums) {
    let left = 0;
    let zeroCount = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        // If we encounter a 0, increment the zero counter
        if (nums[right] === 0) {
            zeroCount++;
        }

        // If the window has more than one 0, shrink it from the left
        while (zeroCount > 1) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        // Calculate current valid window size.
        // Use (right - left) instead of (right - left + 1)
        // because one element from the window MUST be deleted.
        maxLen = Math.max(maxLen, right - left);
    }

    return maxLen;
};