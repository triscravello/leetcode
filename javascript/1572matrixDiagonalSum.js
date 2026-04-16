/**
 * Given a square matrix mat, return the sum of the matrix diagnals.
 * 
 * Only include the sum of all the elements on the primary diagonal and all the elements that are not part of the primary diagonal.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let sum = 0;
    let n = mat.length;

    for (let i = 0; i < n; i++) {
        // Primary diagonal: row i, column i
        sum += mat[i][i];

        // Secondary diagonal: row i, column (n - 1 - i)
        let secondaryCol = n - 1 - i;

        // Avoid double-counting the center element in odd-sized matrices
        if (i !== secondaryCol) {
            sum += mat[i][secondaryCol];
        }
    }

    return sum;
}