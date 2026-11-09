# Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

class Solution:
    def encode(self, strs: list[str]) -> str:
        encoded = ''
        for s in strs:
            encoded += str(len(s)) + '#' + s
        return encoded

    def decode(self, s: str) -> list[str]:
        decoded = []
        i = 0
        while i < len(s):
            j = s.find('#', i)
            length = int(s[i:j])  # Convert the length of the string to an integer
            decoded.append(s[j+1:j+1+length])
            i = j + 1 + length
        return decoded