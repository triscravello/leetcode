# There are 8 prison cells in a row and each cell is either occupied or vacant.

# Each day, whether the cell is occupied or vacant changes according to the following rues:
# - If a cell has two adjacent neighbors that are both occupied or both vacant, then the cell becomes occupied.
# - Otherwise, it becomes vacant.

# Note that because the prison is a row, the first and the last cells in the row can't have two adjacent neighbors.

# You are given an integer array cells where cells[i] == 1 if the ith cell is occupied, and cells[i] == 0 if the ith cell is vacant, and you are given an integer n.

# Return the state of the prison after n days (i.e., after n such changes described above).

# 
# Example 1:
# Input: cells = [0,1,0,1,1,0,0,1], n = 7
# Output: [0,0,1,1,0,0,0,0]
# Explanation: The following table summarizes the state of the prison on each day:
# Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
# Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
# Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
# Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
# Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
# Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
# Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
# Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

# Example 2:
# Input: cells = [1,0,0,1,0,0,1,0], n = 1000000000
# Output: [0,0,1,1,1,1,1,0]

# Constraints:
# - cells.length == 8
# - cells[i] is either 0 or 1.
# - 1 <= n <= 10^9

# Time limit exceeded in O(N) time complexity
# Suggested complexity: O(1) time complexity

class Solution: 
    def prisonAfterNDays(self, cells: list[int], n: int) -> list[int]:
        seen = {}
        
        while n > 0:
            # Convert current cells state to a tuple so we can store it in a hash map
            state_tuple = tuple(cells)
            
            if state_tuple in seen:
                # A cycle is found! Calculate the remaining steps efficiently.
                cycle_length = seen[state_tuple] - n
                n %= cycle_length
                if n == 0:
                    break
            
            seen[state_tuple] = n
            
            # Simulate one day
            n -= 1
            cells = [0] + [1 if cells[i - 1] == cells[i + 1] else 0 for i in range(1, 7)] + [0]
            
        return cells

