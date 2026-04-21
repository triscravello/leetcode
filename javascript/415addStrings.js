/**
 * Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
 * 
 * You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    const result = [];

    // process from right to left until both pointers and carry are exhausted
    while (i >= 0 || j >= 0 || carry > 0) {
        // convert char to digit; use 0 if pointer is out of bounds
        const digit1 = i >= 0 ? num1.charAt(i) - '0' : 0;
        const digit2 = j >= 0 ? num2.charAt(j) - '0' : 0;

        const sum = digit1 + digit2 + carry;
        result.push(sum % 10); // store the last digit of current sum
        carry = Math.floor(sum / 10); // update carry for next iteration

        i--;
        j--;
    }

    // reverse and join to form final result string
    return result.reverse().join('');
}