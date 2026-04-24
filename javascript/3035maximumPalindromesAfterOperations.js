/**
 * You are given a 0-indexed string array words having length n and containing 0-indexed strings.
 * 
 * You are allowed to perform the following operation any number of times (including zero):
 * 
 * Choose integers i, j, x, and y such that 0 <= i, j < n, 0 <= x < words[i].length, 0 <= y < words[j].length, and swap the characters words[i][x] and words[j][y].
 * Return an integer denoting the maximum number of palindromes words can contain, after performing some operations.
 * 
 * Note: i and j may be equal during an operation.
 * 
 * Constraints:
 * 1 <= words.length <= 1000
 * 1 <= words[i].length <= 100
 * words[i] consists only of lowercase English letters.
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maxPalindromesAfterOperations = function(words) {
    const freq = new Array(26).fill(0);

    // build global frequency
    for (const w of words) {
        for (const c of w) {
            freq[c.charCodeAt(0) - 97]++;
        }
    }

    // compute global resources
    let pairs = 0;
    let singles = 0;

    for (const f of freq) {
        pairs += Math.floor(f / 2);
        singles += f % 2;
    }

    // sort words by required resources (smallest first)
    words.sort((a, b) => a.length - b.length);

    let count = 0;

    // greedy assignment
    for (const w of words) {
        let needPairs = Math.floor(w.length / 2);
        let needOdd = w.length % 2;

        // must have enough pairs to build structure
        if (pairs < needPairs) continue;

        pairs -= needPairs;

        if (needOdd === 1) {
            if (singles > 0) {
                singles--;
            } else if (pairs > 0) {
                // break one pair → 2 singles, use 1
                pairs--;
                singles++; // net effect after using one single
            } else {
                // cannot satisfy center requirement
                continue;
            }
        }

        count++;
    }

    return count;
};