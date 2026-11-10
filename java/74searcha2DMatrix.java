// You are given an m x n 2-D integer array matrix and an integer target.

// Each row in matrix is sorted in non-decreasing order.
// The first integer of every row is greater than the last integer of the previous row.

// Return true if target exists within matrix or false otherwise.

// Can you write a solution that runs in O(log(m*n)) time?

class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int rows = matrix.length;
        int cols = matrix[0].length;
        int left = 0;
        int right = rows * cols - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            int midValue = matrix[mid / cols][mid % cols];
            if (midValue == target) {
                return true;
            }
            if (midValue < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    }
}