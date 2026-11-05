# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

#Example 1:

#Input: s = "anagram", t = "nagaram"

#Output: true

#Example 2:

#Input: s = "rat", t = "car"

#Output: false

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        
        count = {}

        # Count characters in s
        for char in s:
            count[char] = count.get(char, 0) + 1
        
        # Substract using t
        for char in t:
            if not count.get(char, 0):
                return False
            count[char] -= 1

        return True