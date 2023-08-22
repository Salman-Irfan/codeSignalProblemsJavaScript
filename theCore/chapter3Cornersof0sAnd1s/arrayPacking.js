// You are given an array of up to four non-negative integers, each less than 256.

// Your task is to pack these integers into one number M in the following way:

//     The first element of the array occupies the first 8 bits of M;
//     The second element occupies next 8 bits, and so on.

// Return the obtained integer M.

// Note: the phrase "first bits of M" refers to the least significant bits of M - the right-most bits of an integer. For further clarification see the following example.

// Example

// For a = [24, 85, 0], the output should be
// solution(a) = 21784.

// An array [24, 85, 0] looks like [00011000, 01010101, 00000000] in binary.
// After packing these into one number we get 00000000 01010101 00011000 (spaces are placed for convenience), which equals to 21784.

function solution(a) {
	if (a.length === 1) {
		const [first] = a;
		const firstBinary = decimalToPaddedBinary(first, 8);
		const afterPacking = parseInt(firstBinary, 2);
		return afterPacking;
	} else if (a.length === 2) {
		const [first, second] = a;
		const firstBinary = decimalToPaddedBinary(first, 8);
		const secondBinary = decimalToPaddedBinary(second, 8);
		const afterPacking = parseInt(secondBinary + firstBinary, 2);
		return afterPacking;
	} else if (a.length === 3) {
		const [first, second, third] = a;
		const firstBinary = decimalToPaddedBinary(first, 8);
		const secondBinary = decimalToPaddedBinary(second, 8);
		const thirdBinary = decimalToPaddedBinary(third, 8);
		const afterPacking = parseInt(
			thirdBinary + secondBinary + firstBinary,
			2
		);
		return afterPacking;
	} else if (a.length === 4) {
		const [first, second, third, fourth] = a;
		const firstBinary = decimalToPaddedBinary(first, 8);
		const secondBinary = decimalToPaddedBinary(second, 8);
		const thirdBinary = decimalToPaddedBinary(third, 8);
		const fourthBinary = decimalToPaddedBinary(fourth, 8);
		const afterPacking = parseInt(
			fourthBinary + thirdBinary + secondBinary + firstBinary,
			2
		);
		return afterPacking;
	}
}

function decimalToPaddedBinary(decimalNumber, length) {
	let binary = decimalNumber.toString(2);
	while (binary.length < length) {
		binary = "0" + binary;
	}
	return binary;
}
