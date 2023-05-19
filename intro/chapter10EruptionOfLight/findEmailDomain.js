// problem
// An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").

// The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.

// Given a valid email address, find its domain part.

// Example

// For address = "prettyandsimple@example.com", the output should be
// solution(address) = "example.com";
// For address = "fully-qualified-domain@codesignal.com", the output should be
// solution(address) = "codesignal.com".

function solution(address) {
	const indices = [];
	for (let i = 0; i < address.length; i++) {
		if (address[i] === "@") {
			indices.push(i);
		}
	}
	const lastIndex = indices[indices.length - 1];
	return address.slice(lastIndex + 1);
}
