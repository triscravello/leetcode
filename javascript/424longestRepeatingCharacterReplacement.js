/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.
 * 
 * Return the length of the longest substring containing the same letter you can get after performing the above operations.
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let left = 0;
    let maxCount = 0;
    const frequencyMap = {};
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        //update frequency map
        const char = s[right];
        frequencyMap[char] = (frequencyMap[char] || 0) + 1;
        
        // update maxCount
        maxCount = Math.max(maxCount, frequencyMap[char]);

        //if window invalid -> shrink
        if ((right - left + 1) - maxCount > k) {
            frequencyMap[s[left]]--;
            left++;
        }

        // update maxLength
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};