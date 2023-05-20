// problem
// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

// Example

// For st = "abcdc", the output should be
// solution(st) = "abcdcba".

function solution(st) {
	let currentIndex = 0;
	let temp = [];
	// compare it with reversed input string
	while (st != st.split("").reverse().join("")) {
		// make array of input string
		temp = st.split("");
		temp.splice(st.length - currentIndex, 0, st[currentIndex]);
		st = temp.join("");
		currentIndex++;
	}
	return st;
}
