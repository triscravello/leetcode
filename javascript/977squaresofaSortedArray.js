// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;

    // Fill the result array from the end to the beginning
    for (let i = n - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            result[i] = nums[left] ** 2;
            left++;
        } else {
            result[i] = nums[right] ** 2;
            right--;
        }
    }

    return result;
};