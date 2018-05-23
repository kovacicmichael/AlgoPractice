
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
	// let stringTwo = str.split("").reduce((rev, char) =>{
	// 	return rev = char + rev;
	// }, "");
	return str.split("").every((char, i) => {
		return char === str[str.length-i-1];
	})
	// let stringTwo = "";
	// for (let i = str.length-1; i >= 0; i--){
	// 	stringTwo += str[i];	
	// }
	// return str === stringTwo;
}

// palindrome("helleh")
module.exports = palindrome;