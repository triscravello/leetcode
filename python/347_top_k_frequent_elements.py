# Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        count = {}  # Count the frequency of each element
        for num in nums:
            count[num] = count.get(num, 0) + 1
        return sorted(count.keys(), key=lambda x: count[x], reverse=True)[:k]