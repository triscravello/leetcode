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
    let line = [];
    let lineLength = 0;

    for (let word of words) {
        if (lineLength + word.length + line.length > maxWidth) {
            result.push(justifyLine(line, lineLength, maxWidth));
            line = [];
            lineLength = 0;
        }

        line.push(word);
        lineLength += word.length;
    }

    result.push(leftJustifyLine(line, maxWidth));
    return result;
};

function justifyLine(line, lineLength, maxWidth) {
    const spacesNeeded = maxWidth - lineLength;
    const gaps = line.length - 1;

    if (gaps === 0) {
        return line[0] + ' '.repeat(spacesNeeded);
    }

    const spacesPerGap = Math.floor(spacesNeeded / gaps);
    const extraSpaces = spacesNeeded % gaps;

    let justified = '';
    for (let i = 0; i < gaps; i++) {
        justified += line[i] + ' '.repeat(spacesPerGap + (i < extraSpaces ? 1 : 0));
    }
    justified += line[gaps]; // add the last word

    return justified;
}

function leftJustifyLine(line, maxWidth) {
    return line.join(' ') + ' '.repeat(maxWidth - line.join(' ').length);
}