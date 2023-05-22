function solution(s) {
	// Initialize an empty string to store the encoded result
	let encodedString = "";

	// Initialize a count variable to keep track of the length of each substring
	let count = 1;

	// Iterate through the string starting from the second character
	for (let i = 1; i <= s.length; i++) {
		// Check if the current character is the same as the previous one
		if (s[i] === s[i - 1]) {
			// If they are the same, increment the count
			count++;
		} else {
			// If they are different, concatenate the length (if greater than 1)
			// and the repeating character from the previous substring to the encodedString
			encodedString += (count > 1 ? count : "") + s[i - 1];

			// Reset the count to 1 for the new substring
			count = 1;
		}
	}

	// Return the final encoded string
	return encodedString;
}
