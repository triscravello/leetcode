// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

// Time complexity: O(n)
// Space complexity: O(1)

class Solution {
    public boolean isPalindrome(String s) {
        // Use regex to remove non-alphanumeric characters and convert to lowercase and reverse the string
        String cleaned = s.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
        String reversed = new StringBuilder(cleaned).reverse().toString();
        return cleaned.equals(reversed);
    }
}