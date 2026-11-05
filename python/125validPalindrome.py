#A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Use regex to remove non-alphanumeric characters and convert to lowercase
        cleaned = re.sub(r'[^a-zA-Z0-9]', '', s).lower()
        # Reverse the cleaned string and compare it to the original cleaned string
        return cleaned == cleaned[::-1]