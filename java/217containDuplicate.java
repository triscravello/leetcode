// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

class Solution {
    public boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>(nums.length);
        for (int num : nums) {
            if (!seen.add(num)) {
                return true;
            }
        }
        return false;
    }
}