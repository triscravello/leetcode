# Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

# The overall run time complexity should be O(log (m+n)).

class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        if len(nums1) > len(nums2):
            return self.findMedianSortedArrays(nums2, nums1)

        m, n = len(nums1), len(nums2)
        left, right = 0, m

        while left <= right:
            mid1 = left + (right - left) // 2
            mid2 = (m + n + 1) // 2 - mid1

            maxLeft1 = float('-inf') if mid1 == 0 else nums1[mid1 - 1]
            minRight1 = float('inf') if mid1 == m else nums1[mid1]

            maxLeft2 = float('-inf') if mid2 == 0 else nums2[mid2 - 1]
            minRight2 = float('inf') if mid2 == n else nums2[mid2]

            if maxLeft1 <= minRight2 and maxLeft2 <= minRight1:
                if (m + n) % 2 == 0:
                    return (max(maxLeft1, maxLeft2) + min(minRight1, minRight2)) / 2.0
                else:
                    return float(max(maxLeft1, maxLeft2))
            elif maxLeft1 > minRight2:
                right = mid1 - 1
            else:
                left = mid1 + 1
        return 0.0
        