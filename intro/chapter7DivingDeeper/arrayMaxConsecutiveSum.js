// Problem
// Given array of integers, find the maximal possible sum of some of its k consecutive elements.

// Example

// For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
// solution(inputArray, k) = 8.
// All possible sums of 2 consecutive elements are:

// 2 + 3 = 5;
// 3 + 5 = 8;
// 5 + 1 = 6;
// 1 + 6 = 7.
// Thus, the answer is 8.
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.integer inputArray

// Array of positive integers.

// Guaranteed constraints:
// 3 ≤ inputArray.length ≤ 105,
// 1 ≤ inputArray[i] ≤ 1000.

function solution(inputArray, k) {
	// constraint
	if (3 <= inputArray.length && inputArray.length <= 10e5) {
		let maxSumArr = [];
		for (let i = 0; i <= inputArray.length - k; i++) {
			// constraint
			if (1 <= inputArray[i] && inputArray[i] <= 1000) {
				let sumOfK = 0;
				for (let j = i; j < i + k; j++) {
					sumOfK += inputArray[j];
				}
				maxSumArr.push(sumOfK);
			}
		}
		return Math.max(...maxSumArr);
	}
}
