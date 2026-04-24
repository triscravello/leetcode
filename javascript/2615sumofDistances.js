/**
 * You are given a 0-indexed integer array nums. There exists an array arr of length nums.length, where arr[i] is the sum of |i - j| for all j such that nums[j] == nums[i].
 * Return the array arr.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distance = function (nums) {
    const n = nums.length;
    const arr = new Array(n).fill(0);
    const indicesMap = new Map();

    // Group indices by their corresponding values in nums
    for (let i = 0; i < n; i++) {
        if (!indicesMap.has(nums[i])) {
            indicesMap.set(nums[i], []);
        }

        indicesMap.get(nums[i]).push(i);
    }

    // Calculate the sum of distances for each group of indices
    for (const indices of indicesMap.values()) {
        const m = indices.length;
        const prefixSum = new Array(m).fill(0);

        // Compute prefix sum of indices
        for (let i = 0; i < m; i++) {
            prefixSum[i] = indices[i] + (i > 0 ? prefixSum[i - 1] : 0);
        }

        // Calculate the distance for each index in the group
        for (let i = 0; i < m; i++) {
            const idx = indices[i];
            const leftCount = i; // Number of indices to the left
            const rightCount = m - 1 - i; // Number of indices to the right

            // Distance from the left side
            const leftDistance = leftCount * idx - (i > 0 ? prefixSum[i - 1] : 0);

            // Distance from the right side
            const rightDistance = (i < m - 1 ? prefixSum[m - 1] - prefixSum[i] : 0) - rightCount * idx;

            // Total distance for the current index
            arr[idx] = leftDistance + rightDistance;
        }
    }

    return arr;
}