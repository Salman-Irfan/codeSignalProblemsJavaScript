// Given a string, find the number of different characters in it.

// Example

// For s = "cabca", the output should be
// solution(s) = 3.

// There are 3 different characters a, b and c.
// Guaranteed constraints:
// 3 ≤ s.length ≤ 1000.

function solution(s) {
	// constraints
	if (3 <= s.length && s.length <= 1000) {
		return new Set(s).size;
	}
}