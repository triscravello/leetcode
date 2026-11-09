# You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:
# Each row must contain the digits 1-9 without duplicates.
# Each column must contain the digits 1-9 without duplicates.
# Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.

# Return true of the Sudoku board is valid, otherwise return false.

class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        # Check each row
        for row in board:
            if not self.isValidRow(row):
                return False
        # Check each column
        for col in range(9):
            if not self.isValidColumn(board, col):
                return False
        # Check each 3x3 sub-box
        for i in range(0, 9, 3):
            for j in range(0, 9, 3):
                if not self.isValidSubBox(board, i, j):
                    return False
        return True
    
    def isValidRow(self, row: list[str]) -> bool:
        seen = set()
        for cell in row:
            if cell != '.':
                if cell in seen:
                    return False
                seen.add(cell)
        return True
    
    def isValidColumn(self, board: list[list[str]], col: int) -> bool:
        seen = set()
        for row in board:
            if row[col] != '.':
                if row[col] in seen:
                    return False
                seen.add(row[col])
        return True
    
    def isValidSubBox(self, board: list[list[str]], startRow: int, startCol: int) -> bool:
        seen = set()
        for i in range(3):
            for j in range(3):
                cell = board[startRow + i][startCol + j]
                if cell != '.':
                    if cell in seen:
                        return False
                    seen.add(cell)
        return True