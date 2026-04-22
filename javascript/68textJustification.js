/**
 * Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth chracters and is fully (left and right) justified.
 * 
 * You should pack your words in a greedy approach; that is, pack as many words as you can in rach line.
 * Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.
 * 
 * Extra spaces between words should be distributed as evenly as possible.
 * If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.
 * 
 * For the last line of text, it should be left-justified, and no extra space is inserted between words.
 * 
 * Note:
 * A word is defined as a character sequence consisting of non-space character only.
 * Each word's length is guaranteed to be greater than 0 and no exceed maxWidth.
 * The input array words contains at least one word.
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const result = [];
    const totalWords = words.length;
    let wordIndex = 0;

    // Process words until all are placed in lines
    while (wordIndex < totalWords) {
        // build current line by adding words that fit within maxWidth
        const currentLineWords = [words[wordIndex]];
        let currentLineLength = words[wordIndex].length;
        wordIndex++;

        // keep adding words while they fit (including minimum one space between words)
        while (wordIndex < totalWords && currentLineLength + 1 + words[wordIndex].length <= maxWidth) {
            currentLineWords.push(words[wordIndex]);
            currentLineLength += 1 + words[wordIndex].length;
            wordIndex++;
        }

        // Handle last line or single word line - left justified
        if (wordIndex === totalWords || currentLineWords.length === 1) {
            const leftJustifiedText = currentLineWords.join(' ');
            const rightPadding = ' '.repeat(maxWidth - leftJustifiedText.length);
            result.push(leftJustifiedText + rightPadding);
            continue;
        }

        // Calculate space distribution for full justification
        // Total spaces needed minus the minimum single spaces between words
        const totalSpacesToDistribute = maxWidth - (currentLineLength - currentLineWords.length + 1);
        const gapsBetweenWords = currentLineWords.length - 1;
        const baseSpacesPerGap = Math.floor(totalSpacesToDistribute / gapsBetweenWords);
        const extraSpaces = totalSpacesToDistribute % gapsBetweenWords;

        // Build the fully justified line
        const justifiedLine = [];
        for (let i = 0; i < gapsBetweenWords; i++) {
            justifiedLine.push(currentLineWords[i]);
            // Add base spaces plus one extra space for the first 'extraSpaces' gaps
             const spacesToAdd = baseSpacesPerGap + (i < extraSpaces ? 1 : 0);
             justifiedLine.push(' '.repeat(spacesToAdd));
        }
        
        // Add the last word without trailing spaces
        justifiedLine.push(currentLineWords[currentLineWords.length - 1]);

        result.push(justifiedLine.join(''));
    }
    
    return result;
};