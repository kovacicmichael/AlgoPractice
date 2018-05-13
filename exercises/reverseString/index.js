//given a string, return that string with its order reversed

//example: reverse(apple) == 'elppa'


// let reverse = (str) => {
// 	let newstring = '';
// 	// for (i = str.length - 1; i >= 0; i--) {
// 	// 	newstring = newstring + str[i];
// 	// }
// 	for(let character of str){
// 		newstring = character + newstring;
// 	}
// 	return newstring;
// };

let reverse = str => {
	return str.split('').reduce((reversed, character) => {
		return character + reversed;
	}, "");
}

//reverse("this is cool");


//or you can use this method

// let reverse = (str) => {
// 	let strArray = str.split('');
// 	let newString = strArray.reverse();
// 	return newString.join('');
// }

// or an even shorter form

// let reverse = (str) => {
// 	return str
// 		.split('')
// 		.reverse()
// 		.join('');
// }

module.exports = reverse;