// Design an algorithm to encode a list of strings to a string. THe encoded string is then sent over the network and is decoded back to the original list of strings.

class Solution {

    public String encode(List<String> strs) {
        StringBuilder encoded = new StringBuilder();
        for (String str : strs) {
            encoded.append(str.length()).append('#').append(str);
        }
        return encoded.toString();
    }

    public List<String> decode(String str) {
        List<String> decoded = new ArrayList<>();
        int i = 0;
        while (i < str.length()) {
            int delimiterIndex = str.indexOf('#', i);
            int length = Integer.parseInt(str.substring(i, delimiterIndex));
            decoded.add(str.substring(delimiterIndex + 1, delimiterIndex + 1 + length));
            i = delimiterIndex + 1 + length;
        }
        return decoded;
    }
}