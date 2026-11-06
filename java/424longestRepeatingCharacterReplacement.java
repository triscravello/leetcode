// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

//Input: s = "ABAB", k = 2
//Output: 4
//Explanation: Replace the two 'A's with two 'B's or vice versa.
//Example 2:

//Input: s = "AABABBA", k = 1
//Output: 4
//Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
//The substring "BBBB" has the longest repeating letters, which is 4.
//There may exists other ways to achieve this answer too.

class Solution {
    public int characterReplacement(String s, int k) {
        int left = 0;
        int maxCount = 0;
        int[] charCount = new int[26];
        int maxLength = 0;

        for (int right = 0; right < s.length(); right++) {
            // update frequency count for current character
            charCount[s.charAt(right) - 'A']++;

            // Track maximum frequency of a single character
            maxCount = Math.max(maxCount, charCount[s.charAt(right) - 'A'])

            // If operations needed exceed k, shrink window from left
            if ((right - left + 1) - maxCount > k) {
                charCount[s.charAt(left) - 'A']--;
                left++;
            }

            // Updat maximum window length
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}