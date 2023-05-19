// problem
// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.

// Given a string, check whether it is beautiful.

// Example

// For inputString = "bbbaacdafe", the output should be solution(inputString) = true.

// This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.

// For inputString = "aabbb", the output should be solution(inputString) = false.

// Since there are more bs than as, this string is not beautiful.

// For inputString = "bbc", the output should be solution(inputString) = false.

// Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.

function solution(inputString) {
	// Convert inputString into array
	let splittedArray = inputString.split("");

	// Sort the array
	let sortedArray = splittedArray.sort();

	// Join into string
	let joinedString = sortedArray.join("");

	// Replace consecutive occurrences with their lengths e.g [3,3,1,1,1]
	let replacedString = joinedString.replace(
		/([a-z])\1*/g,
		(it) => it.length + ","
	);

	// convert into array and Split the string by comma, , and convert each element to a number
	let lengthsArray = replacedString.split(",").slice(0, -1).map(Number);

	// Check if each length satisfies the beautiful condition
	let isBeautiful = lengthsArray.every(
		(el, i, ar) =>
			inputString.indexOf(String.fromCharCode(i + "a".charCodeAt(0))) >=
				0 &&
			(i == 0 || ar[i] <= ar[i - 1])
	);
	return isBeautiful;
}
