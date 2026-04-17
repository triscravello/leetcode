/**
 * You are given an m x n grid where each cell can have one of three values:
 * 
 * 0 representing an empty cell,
 * 
 * 1 representing a fresh orange, or
 * 
 * 2 representing a rotten orange.
 * 
 * Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
 * 
 * Return the minimum number of minutes that must elapse until no cell has a fresh orange. 
 * If this is impossible, return -1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let queue = [];
    let freshCount = 0;
    let minutes = 0;

    // Count fresh oranges and find starting rotten oranges
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) freshCount++;
            if (grid[r][c] === 2) queue.push([r, c]);
        }
    }

    // If there are no fresh oranges to begin with
    if (freshCount === 0) return 0;

    // Process each "minute" layer by layer with BFS
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    while (queue.length > 0 && freshCount > 0) {
        let size = queue.length;
        let rottedThisMinute = false;

        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                // Check bounds and if orange is fresh
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                    grid[nr][nc] = 2; // mark it rotten
                    freshCount--;
                    queue.push([nr, nc]);
                    rottedThisMinute = true;
                }
            }
        }
        if (rottedThisMinute) minutes++;
    }

    // Return -1 if any fresh oranges remain
    return freshCount === 0 ? minutes : -1;
};