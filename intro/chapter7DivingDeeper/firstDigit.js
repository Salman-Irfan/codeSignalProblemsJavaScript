function solution(inputString) {
	// constraint checking
	if (3 <= inputString.length && inputString.length <= 10) {
		// convert the srting into an array
		let arrayFromInputString = Array.from(inputString);
		let firstInteger = arrayFromInputString.find((element) => {
			return !isNaN(parseInt(element));
		});
		return firstInteger;
	}
}
