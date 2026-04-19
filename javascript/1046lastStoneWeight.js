/**
 * You are given an array of integers stones where stones[i] is the weight of ith stone.
 * 
 * We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and u with x <= y. The result of this smash is:
 * 
 * If x == y, both stones are destroyed, and
 * If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
 * 
 * At the end of the game, there is at most one stone left.
 * 
 * Return the weight of the last remaining stone. If there are no stones left, return 0
 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    // basic sorting for brevity:
    while (stones.length > 1) {
        stones.sort((a, b) => a - b); // sort to get heaviest at the end
        let s1 = stones.pop();
        let s2 = stones.pop();

        if (s1 !== s2) {
            stones.push(s1 - s2);
        }
    }

    return stones.length === 0 ? 0 : stones[0];
}