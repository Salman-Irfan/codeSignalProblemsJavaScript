// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

// Example

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
// solution(value1, weight1, value2, weight2, maxW) = 10.

// You can only carry the first item.

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should be
// solution(value1, weight1, value2, weight2, maxW) = 16.

// You're strong enough to take both of the items with you.

// For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should be
// solution(value1, weight1, value2, weight2, maxW) = 7.

function solution(value1, weight1, value2, weight2, maxW) {
	let bestValue = value1 + value2;
	let bestWeight = weight1 + weight2;
	let weightAndValues = [
		[weight1, value1],
		[weight2, value2],
	];

	// if both the product weights are in range for maxW
	if (bestWeight <= maxW) {
		return bestValue;
	}
	// both are in range with maxW but separately
	else if (weightAndValues[0][0] <= maxW && weightAndValues[1][0] <= maxW) {
		return Math.max(value1, value2);
	}
	// weight 1 is in range of maxW
	else if (weightAndValues[0][0] <= maxW) {
		return weightAndValues[0][1];
	}
	// weight 2 is in range of maxW
	else if (weightAndValues[1][0] <= maxW) {
		// weight 1 is in range of maxW
		return weightAndValues[1][1];
	}
	// none of the weight is in the range
	else {
		return 0;
	}
}
