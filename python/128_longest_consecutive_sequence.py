# Given an unsorted array of integers nums, return the length of the longest consecurive elements sequence.

# You must write an algorithm that runs in O(n) time.

class Solution:
    def longestConsecutive(self, nums: list[int]) -> int:
        numSet = set(nums)
        longest = 0
        for num in numSet:
            if num - 1 not in numSet:
                length = 0
                while num + length in numSet:
                    length += 1
                longest = max(longest, length)
        return longest