/**
 * Given an array of strings words, return the first palindromic string in the array. If there is no such string, return an empty string "".
 * 
 * A string is palindromic if it reads the same forward and backward.
 * 
 * Constraints:
 * 
 * 1 <= words.length <= 100
 * 1 <= words[i].length <= 100
 * words[i] consists only of lowercase English letters.
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (const word of words) {
        let left = 0;
        let right = word.length - 1;
        let isPalindrome = true;

        while (left < right) {
            if (word[left] !== word[right]) {
                isPalindrome = false;
                break;
            }

            left++;
            right--;
        }

        if (isPalindrome) {
            return word;
        }
    }

    return "";
}