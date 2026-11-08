# Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.

class Solution:
    def largestRectangleArea(self, heights: list[int]) -> int:
        max_area = 0
        stack = [] # stores pairs of (index, height)
        
        for i, height in enumerate(heights):
            start = i
            # Pop bars that are taller than the current bar
            while stack and stack[-1][1] > height:
                index, h = stack.pop()
                max_area = max(max_area, h * (i - index))
                start = index # current bar xan extend back to this index
            stack.append((start, height))
        
        # calculate area for bars remaining in the stack
        for i, height in stack:
            max_area = max(max_area, height * (len(heights) - i))
            
        return max_area