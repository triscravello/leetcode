# 🧩 LeetCode Solutions in JavaScript

[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Problems](https://img.shields.io/badge/Problems-53%2B-blue)](./javascript/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A curated collection of clean, well-documented solutions to popular LeetCode problems, written in JavaScript. Each solution includes problem description, approach explanation, and time/space complexity analysis.

## 📁 Repository Structure

\`\`\`
.
└── javascript/
    ├── 1twoSum.js
    ├── 20validParentheses.js
    ├── 200numberOfIslands.js
    ├── 238productOfArrayExceptSelf.js
    └── ... (40+ solutions)
\`\`\`

## 🎯 Problem Categories

### Arrays & Hashing
| # | Problem | Difficulty | Key Concepts |
|---|---------|------------|--------------|
| 1 | [Two Sum](./javascript/1twoSum.js) | Easy | Hash Map |
| 217 | [Contains Duplicate](./javascript/217containsDuplicate.js) | Easy | Set |
| 219 | [Contains Duplicate II](./javascript/219containsDuplicateII.js) | Easy | Sliding Window + Hash Map |
| 238 | [Product of Array Except Self](./javascript/238productOfArrayExceptSelf.js) | Medium | Prefix/Suffix Products |
| 304 | [Range Sum Query 2D - Immutable](./javascript/304rangeSumQuery2DImmutable.js) | Medium | 2D Prefix Sum |
| 560 | [Subarray Sum Equals K](./javascript/560subarraySumEqualsK.js) | Medium | Prefix Sum + Hash Map |
| 325 | [Maximum Size Subarray Sum Equals K](./javascript/325maximumSizeSubarraySumEqualsK.js) | Medium | Prefix Sum |
| 1314 | [Matrix Block Sum](./javascript/1314matrixBlockSum.js) | Medium | 2D Prefix Sum |
| 204 | [Count Primes](./javascript/204countPrimes.js) | Medium | Sieve of Eratosthenes |
| 326 | [Power of Three](./javascript/326powerOfThree.js) | Easy | Math / Division |
| 268 | [Missing Number](./javascript/268missingNumber.js) | Easy | XOR / Math |
| 1572 | [Matrix Diagonal Sum](./javascript/1572matrixDiagonalSum.js) | Easy | Matrix Traversal |
| 220 | [Contains Duplicate III](./javascript/220containsDuplicatesIII.js) | Medium | Sorted Window / Bucket Sort |

### Two Pointers & Sliding Window
| # | Problem | Difficulty | Key Concepts |
|---|---------|------------|--------------|
| 3 | [Longest Substring Without Repeating Characters](./javascript/3longestSubstringWithoutRepeating.js) | Medium | Sliding Window + Set |
| 424 | [Longest Repeating Character Replacement](./javascript/424longestRepeatingCharacterReplacement.js) | Medium | Sliding Window |
| 239 | [Sliding Window Maximum](./javascript/239slidingWindowMaximum.js) | Hard | Monotonic Deque |
| 340 | [Longest Substring with At Most K Distinct Characters](./javascript/340longestSubstringwithAtMostKDistinctCharacters.js) | Medium | Sliding Window |
| 283 | [Move Zeroes](./javascript/283moveZeroes.js) | Easy | Two Pointers |
| — | [Longest Subarray with Sum Not Exceeding K](./javascript/longestSubarraywithSumNotExceedingK.js) | Medium | Sliding Window |
| 713 | [Subarray Product Less Than K](./javascript/713subarrayProductLessThanK.js) | Medium | Sliding Window |

### Strings
| # | Problem | Difficulty | Key Concepts |
|---|---------|------------|--------------|
| 242 | [Valid Anagram](./javascript/242validAnagram.js) | Easy | Hash Map / Counter |
| 249 | [Group Shifted Strings](./javascript/249groupShiftedStrings.js) | Medium | Hash Map + Pattern |
| 49 | [Group Anagrams](./javascript/49groupAnagrams.js) | Medium | Hash Map + Sorting |
| 387 | [First Unique Character in a String](./javascript/387firstUniqueCharacterinaString.js) | Easy | Hash Map |
| 344 | [Reverse String](./javascript/344reverseString.js) | Easy | Two Pointers |
| 541 | [Reverse String II](./javascript/541reverseStringII.js) | Easy | String Manipulation |
| 394 | [Decode String](./javascript/394decodeString.js) | Medium | Stack |
| 68 | [Text Justification](./javascript/68textJustification.js) | Hard | Greedy / Simulation |
| 415 | [Add Strings](./javascript/415addStrings.js) | Easy | Two Pointers / Simulation |
| 696 | [Count Binary Substrings](./javascript/696countBinarySubstring.js) | Easy | Group Counting |

### Graphs & Trees
| # | Problem | Difficulty | Key Concepts |
|---|---------|------------|--------------|
| 200 | [Number of Islands](./javascript/200numberOfIslands.js) | Medium | DFS/BFS on Grid |
| 133 | [Clone Graph](./javascript/133cloneGraph.js) | Medium | DFS/BFS + Hash Map |
| 207 | [Course Schedule](./javascript/207courseSchedule.js) | Medium | Topological Sort (Kahn's Algorithm) |
| 210 | [Course Schedule II](./javascript/210courseScheduleII.js) | Medium | Topological Sort |
| 994 | [Rotting Oranges](./javascript/994rottingOranges.js) | Medium | BFS on Grid |

### Intervals
| # | Problem | Difficulty | Key Concepts |
|---|---------|------------|--------------|
| 253 | [Meeting Rooms II](./javascript/253meetingRoomsII.js) | Medium | Two Pointers + Sorting |
| 759 | [Employee Free Time](./javascript/759employeeFreeTime.js) | Hard | Merge Intervals |

### Stack & Design
| # | Problem | Difficulty | Key Concepts |
|---|---------|------------|--------------|
| 20 | [Valid Parentheses](./javascript/20validParentheses.js) | Easy | Stack |
| 380 | [Insert Delete GetRandom O(1)](./javascript/380insertDeleteGetRandom.js) | Medium | Hash Map + Array |

### Dynamic Programming / Greedy
| # | Problem | Difficulty | Key Concepts |
|---|---------|------------|--------------|
| 416 | [Partition Equal Subset Sum](./javascript/416partitionEqualSubsetSum.js) | Medium | 0/1 Knapsack / DP |
| 494 | [Target Sum](./javascript/494targetSum.js) | Medium | 0/1 Knapsack / DP |
| 53 | [Maximum Subarray](./javascript/53maximumSubarray.js) | Easy | Kadane's Algorithm |
| 322 | [Coin Change](./javascript/322coinChange.js) | Medium | Unbounded Knapsack / DP |
| 121 | [Best Time to Buy and Sell Stock](./javascript/121bestTimeToBuyAndSellStock.js) | Easy | Kadane's Algorithm |
| 54 | [Spiral Matrix](./javascript/54spiralMatrix.js) | Medium | Matrix Traversal |
| 1049 | [Last Stone Weight II](./javascript/1049lastStoneWeightII.js) | Medium | 0/1 Knapsack / Partition DP |

### Misc
| # | Problem | Difficulty | Key Concepts |
|---|---------|------------|--------------|
| 412 | [Fizz Buzz](./javascript/412fizzBuzz.js) | Easy | Basic Logic |
| 728 | [Self Dividing Numbers](./javascript/728selfDividingNumbers.js) | Easy | Math / Number Theory |
| 1492 | [The kth Factor of n](./javascript/1492theKthFactorofN.js) | Medium | Math / Factors |
| 2694 | [Event Emitter](./javascript/2694eventEmitter.js) | Medium | Design Pattern |
| 1493 | [Longest Subarray of 1's After Deleting One Element](./javascript/1493longestSubarrayof1'sAfterDeletingOneElement.js) | Medium | Sliding Window |
| 2840 | [Check if Strings Can be Made Equal With Operations II](./javascript/2840checkIfStringsCanbeMadeEqualWithOperationsII.js) | Medium | String Analysis |
| 1046 | [Last Stone Weight](./javascript/1046lastStoneWeight.js) | Easy | Simulation / Sorting |
| — | [Triple Zigzag](./javascript/tripleZigzag.js) | Easy | Array Traversal |

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)

### Running Solutions

Each file is self-contained and can be run directly with Node.js:

\`\`\`bash
# Run a specific solution
node javascript/1twoSum.js

# Or load into your preferred JavaScript environment
\`\`\`

> **Note:** Solutions are designed as LeetCode-compatible function implementations. To test locally, wrap them in a test harness or add your own test cases.

## 📝 Solution Format

Each solution file follows a consistent structure:

\`\`\`javascript
/**
 * [Problem Number]. [Problem Title]
 * https://leetcode.com/problems/[problem-slug]/
 * Difficulty: [Easy|Medium|Hard]
 *
 * [Problem description...]
 */

/**
 * @param {type} paramName - Parameter description
 * @return {type} - Return description
 */
var solutionName = function(params) {
    // Algorithm implementation with comments
};
\`\`\`

## 🎓 Learning Path

**Beginner:**
1. Two Sum → Contains Duplicate → Valid Parentheses → Fizz Buzz → Self Dividing Numbers

**Intermediate:**
1. Product of Array Except Self → Longest Substring Without Repeating Characters
2. Group Anagrams → Valid Anagram
3. Number of Islands → Course Schedule
4. Range Sum Query 2D → Matrix Block Sum (Prefix Sum series)

**Advanced:**
1. Sliding Window Maximum (Monotonic Queue)
2. Course Schedule II (Topological Sort)
3. Partition Equal Subset Sum → Target Sum (0/1 Knapsack series)

## 🔧 Common Patterns Used

| Pattern | Problems | Description |
|---------|----------|-------------|
| **Hash Map** | Two Sum, Group Anagrams | O(1) lookups for complement values |
| **Sliding Window** | Longest Substring, Max Subarray | Dynamic subarray/substring management |
| **Two Pointers** | Reverse String, Move Zeroes | In-place array manipulation |
| **DFS/BFS** | Number of Islands, Clone Graph | Graph traversal and exploration |
| **Topological Sort** | Course Schedule I & II | Ordering with dependencies |
| **Prefix Sum** | Subarray Sum Equals K, Range Sum Query 2D, Matrix Block Sum | Cumulative sum optimization |
| **0/1 Knapsack DP** | Partition Equal Subset Sum, Target Sum | Subset sum and target achievement |
| **2D Prefix Sum** | Range Sum Query 2D, Matrix Block Sum | Efficient rectangle sum queries |

## 📊 Complexity Summary

Most solutions are optimized for:
- **Time Complexity:** O(n) or O(n log n)
- **Space Complexity:** O(1) auxiliary or O(n) for data structures

Individual complexities are documented in each solution file.

## 🤝 Contributing

Contributions are welcome! If you'd like to add a solution:
1. Follow the existing file naming convention: \`[problemNumber][camelCaseTitle].js\`
2. Include the LeetCode problem description in the header comment
3. Add JSDoc annotations for parameters and return values

## 📚 Resources

- [LeetCode](https://leetcode.com/) - Practice platform
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Language reference
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/) - Complexity analysis

## 📜 License

This project is licensed under the MIT License.

---

⭐ **Star this repo** if you find it helpful for your interview preparation!
