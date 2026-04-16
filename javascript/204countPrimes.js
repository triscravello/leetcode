// Given an integer n, return the number of prime numbers that are strictly less than n.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0; // Primes start at 2

    // Initialize an array where index represents the number
    // We only need to check up to n-1
    const isPrime = new Uint8Array(n).fill(1);
    isPrime[0] = 0;
    isPrime[1] = 0;

    // Sieve logic: only need to check up to sqrt(n)
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // Optimization: Start marking multiples from i * i
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = 0;
            }
        }
    }

    // Count the remaining 'true' (1) values
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) count++;
    }

    return count;
};