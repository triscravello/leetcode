/** 
 * Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
 * 
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    let currentSum = 0;
    let map = new Map();

    map.set(0,1);

    for (let num of nums) {
        currentSum += num;

        if (map.has(currentSum - k)) {
            count += map.get(currentSum - k);
        }

        map.set(currentSum, (map.get(currentSum) || 0) + 1);
    }

    return count;
};