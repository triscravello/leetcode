// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        // Sort the string to get the key
        const key = str.split('').sort().join();
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    // Return all groups
    return Array.from(map.values());
};