// Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.

// In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.

// You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number n the kth bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the kth bit of n back to 0.

// Example

//     For n = 37 and k = 3, the output should be
//     solution(n, k) = 33.

//     3710 = 1001012 ~> 1000012 = 3310.

//     For n = 37 and k = 4, the output should be
//     solution(n, k) = 37.

//     The 4th bit is 0 already (looks like the Mad Coder forgot to encrypt this number), so the answer is still 37.

function solution(n, k) {
	return parseInt((n & ~(1 << (k - 1))).toString(10));
	//   (1 << (k - 1)): This part of the expression shifts the binary digit 1 to the left by k - 1 positions. For example, if k is 5, (1 << (k - 1)) would result in binary 1000.

	// ~(1 << (k - 1)): The ~ operator is the bitwise NOT operator. It flips all the bits in the binary representation of the value. So, if (1 << (k - 1)) results in 1000, ~(1 << (k - 1)) would result in 0111. In other words, it creates a bitmask where all bits are set except for the k-th bit.

	// n & ~(1 << (k - 1)): The & operator is the bitwise AND operator. It performs a bitwise AND operation between each corresponding bit of the binary representation of n and the binary representation of ~(1 << (k - 1)). This effectively clears the k-th bit of n to 0 while keeping all other bits unchanged.

	// .toString(2): This converts the modified value back to its binary representation using the toString() method with a radix of 2.
}
