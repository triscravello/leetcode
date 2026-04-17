/**
 * Perform the following shift operations on a string:
 * 
 * Right shift: Replace every letter with the successive letter of the English alphabet, where 'z' is replaced by 'a'. For example, "abc" can be right-shifted to "bcd" or "xyz" can be right-shifted to "yza".
 * Left shift: Replace every letter with the preceding letter of the English alphabet, where 'a' is replaced by 'z'. For example, "bcd" can be left-shifted to "abc" or "yza" can be left-shifted to "xyz".
 * 
 * We can keep shifting the string in both directions to form an endless shifting sequence.
 * 
 * For example, shift "abc" to form the sequence: ... <-> "abc" <-> "bcd" <-> ... <-> "xyz" <-> "yza" <-> .... <-> "zab" <-> "abc" <-> ...
 * You are given an array of strings strings, group together all strings[i] that belong to the same shifting sequence. You may return the answer in any order.
 */

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
var groupStrings = function(strings) {
    const map = new Map();

    for (const str of strings) {
        let key = "";
        // Generate a unique signature for each shifting sequence
        for (let i = 1; i < str.length; i++) {
            // Calculate distance between current and previous char
            let diff = str.charCodeAt(i) - str.charCodeAt(i - 1);
            // Normalize distance with modulo 26 to handle wrap-around
            diff = (diff + 26) % 26;
            key += `${diff},`;
        }

        // Use the generated signature as the key in our Map
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }

    // Return all grouped arrays
    return Array.from(map.values());
};