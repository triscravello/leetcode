// You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:
// Each row must contain the digits 1-9 without duplicates.
// Each column must contain the digits 1-9 without duplicates.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.

// Return true of the Sudoku board is valid, otherwise return false.

class Solution {
    public boolean isValidSudoku(char[][] board) {
        Set<String> seen = new HashSet<>();

        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                char current = board[i][j];
                if (current != '.') {
                    // Crate unique string identifiers for row, column, and sub-box
                    String b = "(" + current + ")";
                    if (!seen.add(i + "row" + b) || !seen.add(b + "col" + j) || !seen.add(i / 3 + "box" + j / 3 + b)) {
                        return false;
                    }
                }
            }
        }

        return true;
    }
}