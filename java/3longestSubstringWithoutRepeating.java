// Given a string s, find the length of the longest substring without duplicate characters.

class Solution {
    public int lengthOfLongestSubstring(String s) {
        int left = 0;
        int right = 0;
        int maxLength = 0;
        Set<Character> charSet = new HashSet<>();

        while (right < s.length()) {
            // If character at 'right' is a duplicate, shrink window from 'left'
            if (charSet.contains(s.charAt(right))) {
                charSet.remove(s.charAt(left));
                left++;
            } else {
                // Add new character and update max length
                charSet.add(s.charAt(right));
                right++;
            }
            maxLength = Math.max(maxLength, right - left);
        }

        return maxLength;
    }
}