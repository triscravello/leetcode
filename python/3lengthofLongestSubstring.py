#Given a string s, find the length of the longest substring without duplicate characters.

#Example 1:

#Input: s = "abcabcbb"
#Output: 3
#Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
#Example 2:
#Input: s = "bbbbb"
#Output: 1
#Explanation: The answer is "b", with the length of 1.
#Example 3:
#Input: s = "pwwkew"
#Output: 3
#Explanation: The answer is "wke", with the length of 3.
#Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        right = 0
        max_length = 0
        char_set = set()
        while right < len(s):
            if s[right] not in char_set:
                char_set.add(s[right])
                right += 1
            else:
                char_set.remove(s[left])
                left += 1
            max_length = max(max_length, right - left)
        return max_length