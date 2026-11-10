# You are given an m x n 2-D integer array matrix and an integer target.

# Each row in matrix is sorted in non-decreasing order.
# The first integer of every row is greater than the last integer of the previous row.
# Return true if target exists within matrix or false otherwise.

# Can you write a solution that runs in O(log(m * n)) time?

class Solution: 
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        rows = len(matrix)
        cols = len(matrix[0])
        left = 0
        right = rows * cols - 1
        while left <= right:
            mid = left + (right - left) // 2
            mid_value = matrix[mid // cols][mid % cols]
            if mid_value == target:
                return True
            if mid_value < target:
                left = mid + 1
            else:
                right = mid - 1
        return False