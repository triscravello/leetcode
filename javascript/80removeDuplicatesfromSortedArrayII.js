/**
 * Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
 * 
 * Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
 * 
 * Return k after placing the final result in the first k slots of nums.
 * 
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) return nums.length; // If there are 2 or fewer elements, all are valid

    let k = 2; // Start from the third element

    for (let i = 2; i < nums.length; i++) {
        // If the current element is not the same as the element at position k-2, it's valid
        if (nums[i] !== nums[k - 2]) {
            nums[k] = nums[i]; // Move the valid element to position k
            k++; // Increment the count of valid elements
        }
    }

    return k; // Return the number of valid elements
}