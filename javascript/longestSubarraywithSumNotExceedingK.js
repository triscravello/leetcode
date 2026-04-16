// Given an array nums (all positive integers) and integer k, return the length of the longest contiguous subarray whose sum is ≤ k.

function longestSubarray(nums, k) {
    let left = 0;
    let sum = 0;
    let maxLen = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while (sum > k) {
            sum -= nums[left];
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}