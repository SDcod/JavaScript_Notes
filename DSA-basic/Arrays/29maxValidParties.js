/*You are given:

engagementScores[] → array of integers (scores of users)
minimumWatchingScore → integer threshold
Rules:
Each user can belong to at most one party.
A party can include multiple users, but no duplicates.

The score of a party is:

partyScore = (number of users in party) × (minimum score among those users)

A party is valid if:

partyScore ≥ minimumWatchingScore

👉 Goal: Maximize the number of valid parties
*/

function maxValidParties(scores, minScore) {
  scores.sort((a, b) => b - a);
  let parties = 0;
  let groupSize = 0;

  for (let score of scores) {
    groupSize++;
    if (groupSize * score >= minScore) {
      parties++;
      groupSize = 0;
    }
  }

  return parties;
}

const scores = [3, 1, 3, 4, 2];
const minScore = 6;

console.log(maxValidParties(scores, minScore)); // Output: 2
