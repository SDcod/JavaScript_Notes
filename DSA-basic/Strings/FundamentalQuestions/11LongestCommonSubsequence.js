// Problem 2: Longest Common Subsequence (LCS)
// 📌 Problem Statement:
// Given two strings, find the length of their longest common subsequence. A subsequence is a sequence derived from another string by deleting some characters without changing their order.

// 🔹 Example:

// Input: "abcde", "ace"
// Output: 3   // "ace" is the longest common subsequence
// 🔍 Why This Problem?
// ✅ Introduces dynamic programming concepts.
// ✅ Common in real-world applications like version control, bioinformatics, and text diff algorithms.

function lcsDP(s1, s2) {
  let m = s1.length,
    n = s2.length;
  let dp = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[m][n];
}

console.log(lcsDP("abcde", "ace")); // Output: 3
