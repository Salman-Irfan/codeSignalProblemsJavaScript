// problem
// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example

// For n = 152, the output should be
// solution(n) = 52;
// For n = 1001, the output should be
// solution(n) = 101.

function solution(n) {
	const numString = n.toString(); // Convert the number to a string
	const numLength = numString.length; // Get the length of the number
	let maxNum = 0; // Variable to store the maximum number found

	// Iterate through each digit
	for (let i = 0; i < numLength; i++) {
		// Remove the current digit by concatenating the substrings before and after it
		// numString.substring(0, i) will return "" at that index
		const currentNum = parseInt(
			numString.substring(0, i) + numString.substring(i + 1)
		);

		// Update the maximum number if the current number is larger
		if (currentNum > maxNum) {
			maxNum = currentNum;
		}
	}

	return maxNum;
}
