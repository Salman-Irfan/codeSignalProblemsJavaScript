// problem
// Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.

// The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:

// Example

// For bishop = "a1" and pawn = "c3", the output should be
// solution(bishop, pawn) = true.

// For bishop = "h1" and pawn = "h3", the output should be
// solution(bishop, pawn) = false

function solution(bishop, pawn) {
	// Get the column and row indices of the bishop and pawn positions
	const bishopCol = bishop.charCodeAt(0) - "a".charCodeAt(0);
	const bishopRow = parseInt(bishop.charAt(1)) - 1;
	const pawnCol = pawn.charCodeAt(0) - "a".charCodeAt(0);
	const pawnRow = parseInt(pawn.charAt(1)) - 1;

	// Check if the bishop and pawn are on the same diagonal
	return Math.abs(bishopCol - pawnCol) === Math.abs(bishopRow - pawnRow);
}