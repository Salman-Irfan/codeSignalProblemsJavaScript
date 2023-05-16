// Given a string, output its longest prefix which contains only digits.

// Example

// For inputString = "123aa1", the output should be
// solution(inputString) = "123".

function solution(inputString) {
	let longestPrefix = ""; // Variable to store the longest prefix
	let currentPrefix = ""; // Variable to build the current prefix

	for (let i = 0; i < inputString.length; i++) {
		if (!isNaN(parseInt(inputString[i]))) {
			// Check if the character is a digit
			currentPrefix += inputString[i]; // Add the digit to the current prefix

			// Check if the current prefix is longer than the longest prefix found so far
			if (currentPrefix.length > longestPrefix.length) {
				longestPrefix = currentPrefix; // Update the longest prefix
			}
		} else {
			break; // Stop the loop when a non-digit character is encountered
		}
	}

	return longestPrefix; // Return the longest prefix containing only digits
}
