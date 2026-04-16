// Given a string s and an integer k, return the length of the longest substring of s that contains at most k distinct characters.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
*/
var lengthOfLongestSubstringKDistinct = function(s, k) {
    if (k === 0) return 0;

    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        // Add right character to map
        map.set(s[right], (map.get(s[right]) || 0) + 1);

        // If distinct characters exceed k, shrink window from left 
        while (map.size > k) {
            let leftChar = s[left];
            map.set(leftChar, map.get(leftChar) - 1);
            if (map.get(leftChar) === 0) {
                map.delete(leftChar);
            }
            left++;
        }

        // Update maximum length found
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}