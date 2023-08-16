// In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.

// Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.

// Example

//     For score1 = 3 and score2 = 6, the output should be
//     solution(score1, score2) = true.

//     Since player 1 hadn't reached 5 wins, the set ends once player 2 has won 6 games.

//     For score1 = 8 and score2 = 5, the output should be
//     solution(score1, score2) = false.

//     Since both players won at least 5 games, the set would've ended once one of them won the 7th one.

//     For score1 = 6 and score2 = 5, the output should be
//     solution(score1, score2) = false.

//     This set will continue until one of these players wins their 7th game, so this can't be the final score.

function solution(score1, score2) {
    // Find the maximum and minimum of the two scores
    let maxScore = Math.max(score1, score2);
    let minScore = Math.min(score1, score2);
    
    // Check if the maximum score is 6 and the minimum score is less than 5
    // This covers the case where one player wins with a score of 6-0, 6-1, 6-2, 6-3, or 6-4
    let player1WinsSet = maxScore === 6 && minScore < 5;
    
    // Check if the maximum score is 7 and the minimum score is between 5 and 6 (inclusive)
    // This covers the case where one player wins with a score of 7-5 or 7-6
    let player2WinsSet = maxScore === 7 && minScore > 4 && minScore < 7;
    
    // Return true if either of the above conditions is met, indicating a valid set outcome
    return player1WinsSet || player2WinsSet;
}
