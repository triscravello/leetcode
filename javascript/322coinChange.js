/**
 * You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
 * 
 * Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
 * 
 * You may assume that you have an infinite number of each kind of coin.
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // initialize DP array with a value larger than any possible answer (amount + 1)
    // dp[i] will store the minimum number of coins to make change for amount i.
    const dp = new Array(amount + 1).fill(amount + 1);

    // base case: 0 coins are needed to make an amount of 0
    dp[0] = 0;

    // iterate through every amount from 1 to the target amount
    for (let i = 1; i <= amount; i++) {
        // for each amount, try every available coin denomination
        for (const coin of coins) {
            if (i - coin >= 0) {
                // take the minimum of current dp[i]
                // and 1 (current coin) + dp[remaining amount]
                dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
    }

    // if dp[amount] is still the initial filler, it means no combination was found
    return dp[amount] > amount ? -1 : dp[amount];
};