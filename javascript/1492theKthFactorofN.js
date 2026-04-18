/**
 * You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i ==0.
 * 
 * Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    const factors = [];

    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
            if (i !== n / i) {
                factors.push(n / i);
            }
        }
    }

    factors.sort((a, b) => a - b);

    return k <= factors.length ? factors[k - 1] : -1;
}