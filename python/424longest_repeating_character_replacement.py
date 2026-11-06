# You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

# Return the length of the longest substring containing the same letter you can get after performing the above operations.

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = 0
        max_count = 0
        char_count = [0] * 26
        max_length = 0

        for right in range(len(s)):
            # update frequency count for current character
            char_count[ord(s[right]) - ord('A')] += 1

            # Track maximum frequency of a single character
            max_count = max(max_count, char_count[ord(s[right]) - ord('A')])

            # If operations needed exceed k, shrink window from left
            if (right - left + 1) - max_count > k:
                char_count[ord(s[left]) - ord('A')] -= 1
                left += 1

            # Update maximum window length
            max_length = max(max_length, right - left + 1)

        return max_length