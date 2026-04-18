/**
 * Given a 2D matrix matrix, handle multiple queries of the following type:
 * 
 * Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 * 
 * Implement the NumMatrix class:
 * NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
 * int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
 * 
 * You must design an algorithm where sumRegion works on O(1) time complexity.
 */

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if (!matrix.length) return;
    const r = matrix.length, c = matrix[0].length;
    // Padding with an extra row/col handles boundary condition
    this.sums = Array.from({ length: r + 1}, () => new Array(c + 1).fill(0));

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            this.sums[i + 1][j + 1] = matrix[i][j] + this.sums[i][j + 1] + this.sums[i + 1][j] - this.sums[i][j];
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.sums[row2 + 1][col2 + 1] - this.sums[row1][col2 + 1] - this.sums[row2 + 1][col1] + this.sums[row1][col1];
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */