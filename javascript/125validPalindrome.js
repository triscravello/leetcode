/**
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * 
 * Given a string s, return true if it is a palindrome, or false otherwise.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Use regex to remove non-alphanumeric characters and convert to lowercase
    const alphanumeric = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Reverse the cleaned string and compare it to the original cleaned string
    const reversed = alphanumeric.split('').reverse().join('');
    return alphanumeric === reversed;
}