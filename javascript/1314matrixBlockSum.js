/**
 * Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:
 * 
 * i - k <= r <= i + k,
 * 
 * j - k <= c <= j + k, and
 * 
 * (r, c) is a valid position in the matrix.
 */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    const m = mat.length;
    const n = mat[0].length;
    const prefix = Array.from({ length: m + 1}, () => new Array(n + 1).fill(0));

    // build 2D prefix sum array
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            prefix[i][j] = mat[i - 1][j - 1] + prefix[i - 1][j] + prefix[i][j-1] - prefix[i - 1][j - 1];
        }
    }

    const answer = Array.from({ length: m }, () => new Array(n).fill(0));

    // query range sum for each (i, j)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let r1 = Math.max(0, i - k), c1 = Math.max(0, j - k);
            let r2 = Math.min(m - 1, i + k), c2 = Math.min(n - 1, j + k);

            // adjust to prefix sum coordinates (r2+1, c2+1)
        answer[i][j] = prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1];
        }
    }

    return answer;
};