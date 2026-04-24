/**
 * Given a string s, find two disjoint palindromic subsequences of s such that the product of their lengths is maximized. The two subsequences are disjoint if they do not both pick a character at the same index.
 * 
 * Return the maximum possible product of the lengths of the two palindromic subsequences.
 * 
 * A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters. A string is palindromic if it reads the same forward and backward.
 */

/**
 * @param {string} s
 * @return {number}
 */
var maxProduct = function(s) {
    const n = s.length;
    const palindromicSubsequences = [];

    function isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    };

    // Generate all possible subsequences of the string
    for (let i = 0; i < (1 << n); i++) {
        let subsequence = '';
        for (let j = 0; j < n; j++) {
            if (i & (1 << j)) {
                subsequence += s[j];
            }
        }

        // Check if the generated subsequence is a palindrome and store it
        if (isPalindrome(subsequence)) {
            palindromicSubsequences.push(subsequence);
        } else {
            palindromicSubsequences.push('');
        }
    }

    let maxProduct = 0;

    // Calculate the maximum product of lengths of two disjoint palindromic subsequences
    for (let i = 0; i < palindromicSubsequences.length; i++) {
        for (let j = i + 1; j < palindromicSubsequences.length; j++) {
            if ((i & j) === 0) {
                const product = palindromicSubsequences[i].length * palindromicSubsequences[j].length;
                maxProduct = Math.max(maxProduct, product);
            }
        }
    }

    return maxProduct;
}