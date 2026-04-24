// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    const pCount = new Array(26).fill(0);
    const sCount = new Array(26).fill(0);

    function arraysEqual(s, p) {
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== p[i]) {
                return false;
            } 
        }

        return true;
    }

    for (let i = 0; i < p.length; i++) {
        pCount[p.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < s.length; i++) {
        sCount[s.charCodeAt(i) - 97]++;

        if (i >= p.length) {
            sCount[s.charCodeAt(i - p.length) - 97]--;
        }

        if (arraysEqual(sCount, pCount)) {
            result.push(i - p.length + 1);
        }
    }

    return result;
};
