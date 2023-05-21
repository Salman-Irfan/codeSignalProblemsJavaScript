// problem
// A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.

// The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).

// Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.

// Example

// For inputString = "00-1B-63-84-45-E6", the output should be
// solution(inputString) = true;
// For inputString = "Z1-1B-63-84-45-E6", the output should be
// solution(inputString) = false;
// For inputString = "not a MAC-48 address", the output should be
// solution(inputString) = false.

function solution(inputString) {
	let hyphenCount = 0; // Counter for the number of hyphens in the inputString

	for (let i in inputString) {
		if (inputString[i] === "-") {
			hyphenCount++; // Increment hyphenCount when a hyphen is encountered
		}
	}

	if (hyphenCount === 5) {
		// Check if there are exactly 5 hyphens in the inputString
		const groups = inputString.split("-"); // Split the inputString into groups using hyphens as separators
		if (groups.length === 6) {
			// Check if there are exactly 6 groups
			for (let group of groups) {
				// Iterate over each group
				if (!/^[0-9A-F]{2}$/.test(group)) {
					// Check if the group consists of two hexadecimal characters
					return false; // Return false if any group is invalid
				}
			}
			return true; // Return true if all groups are valid
		} else {
			return false; // Return false if there are not exactly 6 groups
		}
	} else {
		return false; // Return false if there are not exactly 5 hyphens
	}
}
