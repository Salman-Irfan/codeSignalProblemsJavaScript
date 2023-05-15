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
