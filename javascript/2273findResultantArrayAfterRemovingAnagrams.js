/**
 * You are given a 0-indexed string array words, where words[i] consists of lowercase English letters.
 *
 * In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.
 *
 * Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    const result = [words[0]];

    function arraysEqual(prev, curr) {
        for (let i = 0; i < prev.length; i++) {
            if (prev[i] !== curr[i]) {
                return false;
            }
        }

        return true;
    }

    for (let i = 1; i < words.length; i++) {
        const prev = result[result.length - 1];
        const curr = words[i];

        if (prev.length !== curr.length) {
            result.push(curr);
            continue;
        }

        const prevCount = new Array(26).fill(0);
        const currCount = new Array(26).fill(0);

        for (let j = 0; j < prev.length; j++) {
            prevCount[prev.charCodeAt(j) - 97]++;
            currCount[curr.charCodeAt(j) - 97]++;
        }

        if (!arraysEqual(prevCount, currCount)) {
            result.push(curr);
        }
    }

    return result;
};