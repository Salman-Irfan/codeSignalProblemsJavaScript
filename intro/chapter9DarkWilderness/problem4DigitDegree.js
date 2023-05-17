// problem
// Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.

// Given an integer, find its digit degree.

// Example

// For n = 5, the output should be
// solution(n) = 0;
// For n = 100, the output should be
// solution(n) = 1.
// 1 + 0 + 0 = 1.
// For n = 91, the output should be
// solution(n) = 2.
// 9 + 1 = 10 -> 1 + 0 = 1.

function solution(n) {
	let nArr = n.toString().split("").map(Number);
	let count = 0;
	if (nArr.length === 1) {
		return 0;
	}
	while (nArr.length > 1) {
		let sum = nArr.reduce((acc, curr) => acc + curr, 0);
		nArr = sum.toString().split("").map(Number);
		count++;
	}
	return count;
}
