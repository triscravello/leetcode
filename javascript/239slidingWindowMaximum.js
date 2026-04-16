/**
 * You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
 
 * Return the max sliding window.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    const n = nums.length;
    if (n === 0) return [];
    const result = [];
    const deque = []; // store indices of potential max elements

    for (let i = 0; i < n; i++) {
        // remove indices that are out of current window
        while (deque.length && deque[0] < i - k + 1) {
            deque.shift();
        }

        // remove indices whose corresponding values are less than nums[i]
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        // add current index
        deque.push(i);

        // add maximum for current window to result
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
};