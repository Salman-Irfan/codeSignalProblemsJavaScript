// problem
// Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.

// The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.

// For cell = "a1", the output should be
// solution(cell) = 2.

// For cell = "c2", the output should be
// solution(cell) = 6.

function solution(cell) {
	// Convert the cell position to coordinates
	const column = cell.charCodeAt(0) - 97; // Convert column letter to index (0 to 7)
	const row = parseInt(cell[1]) - 1; // Convert row number to index (0 to 7)

	// Define the possible moves for a knight
	const moves = [
		[-2, -1],
		[-2, 1],
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
		[2, -1],
		[2, 1],
	];

	let count = 0;

	// Iterate through each possible move
	for (const move of moves) {
		const newRow = row + move[0];
		const newColumn = column + move[1];

		// Check if the new position is within the bounds of the chessboard
		if (newRow >= 0 && newRow < 8 && newColumn >= 0 && newColumn < 8) {
			count++;
		}
	}

	return count;
}
