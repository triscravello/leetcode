# Given an array of strings strs, group the anagrams together. You can return the answer in any order.

class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        map = {}

        for str in strs:
            key = ''.join(sorted(str))
            if key not in map:
                map[key] = []
            map[key].append(str)

        return list(map.values())