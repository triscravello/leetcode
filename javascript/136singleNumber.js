// Given a non-empty array of integer nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let singleNum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        singleNum = singleNum ^ nums[i];
    }

    return singleNum;
}