//given a string, return that string with its order reversed

//example: reverse(apple) == 'elppa'


// let reverse = (str) => {
// 	let oldstring = str.split("")
// 	let newstring = [];
// 	for (i = oldstring.length - 1; i >= 0; i--) {
// 		newstring.push(str[i]);
// 	}
// 	return newstring.join("");
// };

//reverse("this is cool");


//or you can use this method

let reverse = (str) => {
	let strArray = str.split('');
	let newString = strArray.reverse();
	return newString.join('');
}

module.exports = reverse;