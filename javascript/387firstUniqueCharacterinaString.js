// Given a string s, find the first non-repeating character in it and return its index. If it does not exists, return -1.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let count = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (Object.keys(count).includes(char)) {
            let amount = count[char];
            count[char] = amount+1;
        } else {
            count[char] = 1;
        }
    }

    for (char in count) {
        if(count[char] === 1) {
            return s.indexOf(char);
        }
    }

    return -1;
};