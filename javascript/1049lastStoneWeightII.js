/**
 * You are given an array of integers stones where stones[i] is the weight of the ith stone.
 * 
 * We are playing a game with the stones. On each turn, we choose any two stones and smash them together. Suppose the stones have weights x and y with x <= y. The result of the smash is:
 * 
 * If x == y, both stones are destroyed, and 
 * If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 * 
 * At the end of the game, there is at most one stone left.
 * 
 * Return the smallest possible weight of the left stone. If there are no stones left, return 0. 
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function(stones) {
    const totalSum = stones.reduce((acc, curr) => acc + curr, 0);
    const target = Math.floor(totalSum / 2);

    // dp[i] will be true if a sum of i is achievable
    const dp = new Array(target + 1).fill(false);
    dp[0] = true; // base case: sum of o is always possible

    let maxWeight = 0;

    for (let stone of stones) {
        // iterate backwards to prevent using the same stone multiple times
        for (let i = target; i >= stone; i--) {
            if (dp[i - stone]) {
                dp[i] = true;
                maxWeight = Math.max(maxWeight, i);
            }
        }
    }

    // The smallest weight is the difference between the two partitioned groups
    return totalSum - 2 * maxWeight;
}