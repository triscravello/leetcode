/**
 * A self-dividing number is a number that is divisible by every digit it contains.
 * 
 * For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
 * 
 * A self-dividing number is not allowed to contain the digit zero.
 * 
 * Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right] (both inclusive).
 */

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let nums = [];

    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            nums.push(i);
        }
    }

    return nums;
};

// Helper function to check self-dividing property
function isSelfDividing(num) {
    let temp = num;
    while (temp > 0) {
        let digit = temp % 10;
        // Rules: cannot contain 0, and original number must be divisible by the digit
        if (digit === 0 || num % digit !== 0) {
            return false;
        }
        temp = Math.floor(temp / 10);
    }
    return true;
};