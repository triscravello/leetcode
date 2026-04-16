/**
 * You are given two strings s1 and s2, both of length n, consisting of lowercase English letters.
 
 * You can apply the following operation on any of the two strings any number of times:
Choose any two indices i and j such that i < j and the difference j - i is even, then swap the two characters at those indices in the string.

Return true if you can make the strings s1 and s2 equal, and false otherwise.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkStrings = function(s1, s2) {
    const countChars = (str, start) => {
        const map = new Map();
        for (let i = start; i < str.length; i += 2) {
            map.set(str[i], (map.get(str[i]) || 0) + 1);
        }
        return map;
    };

    const evenS1 = countChars(s1, 0);
    const oddS1 = countChars(s1, 1);
    const evenS2 = countChars(s2, 0);
    const oddS2 = countChars(s2, 1);

    const mapsEqual = (m1, m2) => {
        if (m1.size !== m2.size) return false;
        for (let [key, val] of m1) {
            if (m2.get(key) !== val) return false;
        }

        return true;
    };

    return mapsEqual(evenS1, evenS2) && mapsEqual(oddS1, oddS2);
};