// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
// 	const charOb = {};
// 	let max = 0;
// 	let maxChar = "";

// 	for (let char of str){
// 		//charOb[char] = charOb[char] + 1 || 1;
// 		if(!charOb[char]){
// 			charOb[char] = 1;
// 		}else{
// 			charOb[char]++
// 		}
// 	}

// 	for (let letter in charOb){
// 		if(charOb[letter] > max){
// 			max = charOb[letter];
// 			maxChar = letter;
// 		}
		
// 	}
// 	console.log(max);
// 	console.log(maxChar);
// 	return maxChar;
// }




//maxChar("hello world")
//module.exports = maxChar;


function charMap (str){

	const charMap = {};

	for (let char of str){
		console.log(char);
		if(!charMap[char]){
			charMap[char] = 1;
		}else{
			charMap[char]++
		}
	}
	for (let char in charMap){
		console.log("Letter: " + char + " occurs " + charMap[char] + " times.");
	}
	console.log(charMap)
}

charMap("this is it")




