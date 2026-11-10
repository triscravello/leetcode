# Design a time-based key-value data structure that can store multiple values for the same key at different time stamps and retrieve the key's value at a certain timestamp.

# Implement the TimeMap class:

# TimeMap() Initializes the object of the data structure.
# void set(String key, String value, int timestamp) Stores the key with the value value at the given time timestamp.
# String get(String key, int timestamp) Returns a value such that set was called previously, with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest timestamp_prev. If there are no values, it returns "".

class TimeMap:
    def __init__(self):
        self.map = {}
        self.tree_map = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key not in self.map:
            self.map[key] = []
        self.map[key].append((timestamp, value))
        if key not in self.tree_map:
            self.tree_map[key] = []
        self.tree_map[key].append((timestamp, value))
    
    def get(self, key: str, timestamp: int) -> str:
        if key not in self.map:
            return ""
        
        left, right = 0, len(self.map[key]) - 1
        while left <= right:
            mid = left + (right - left) // 2
            if self.map[key][mid][0] == timestamp:
                return self.map[key][mid][1]
            if self.map[key][mid][0] < timestamp:
                left = mid + 1
            else:
                right = mid - 1
        
        return self.map[key][right][1] if right >= 0 else ""