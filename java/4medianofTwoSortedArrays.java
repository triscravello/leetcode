// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // 1. Ensure binary search is performed on the smaller array
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }

        int m = nums1.length;
        int n = nums2.length;
        int left = 0, right = m;

        while (left <= right) {
            int mid1 = left + (right - left) / 2;
            int mid2 = (m + n + 1) / 2 - mid1;

            int maxLeft1 = (mid1 == 0) ? Integer.MIN_VALUE : nums1[mid1 - 1];
            int minRight1 = (mid1 == m) ? Integer.MAX_VALUE : nums1[mid1];

            int maxLeft2 = (mid2 == 0) ? Integer.MIN_VALUE : nums2[mid2 - 1];
            int minRight2 = (mid2 == n) ? Integer.MAX_VALUE : nums2[mid2];

            if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                if ((m + n) % 2 == 0) {
                    // 2. Divide by 2.0 for average of two middle elements
                    return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
                } else {
                    return Math.max(maxLeft1, maxLeft2);
                }
            } else if (maxLeft1 > minRight2) {
                right = mid1 - 1;
            } else {
                left = mid1 + 1;
            }
        }
        
        return 0.0;
    }
}