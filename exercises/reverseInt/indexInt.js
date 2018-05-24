// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
// 	let numberSign = Math.sign(n);
// 	let reversedNumber = "";

// 	if(numberSign === -1){
// 		Math.abs(n).toString().split("").reduce(function(reversed, character){
// 			reversedNumber = character + reversed;
// 		});
// 		// for(let i = absNumber.length-1; i >= 0; i--){
// 		// 	reversedNumber += absNumber[i];
// 		// }
// 		console.log(reversedNumber)
// 		// let newNumber = parseInt(reversedNumber);
// 		// console.log(-Math.abs(newNumber))
// 		console.log(parseInt(reversedNumber) * -1)
// 		return parseInt(reversedNumber) * -1;
// 	}else{
// 		console.log("here")
// 		n.toString().split("").reduce(function(reversed, character){
// 			reversedNumber = character + reversed;
// 			console.log("character: " + character)
// 		});
// 		// for(let i = tempNumber.length-1; i >= 0; i--){
// 		// 	reversedNumber += tempNumber[i];
// 		// }
// 		console.log(reversedNumber);
// 		let newNumber = parseInt(reversedNumber);
// 		console.log(newNumber)
// 		return newNumber;
// 	}
// }

function reverseInt(n){
	//let reversedNumber = n.toString().split('').reverse().join('');
	let reversedNumber = Math.abs(n).toString().split('').reduce((reversed, character) => {
		return character + reversed;
	})

	console.log(parseInt(reversedNumber) * Math.sign(n));
	return reversedNumber * Math.sign(n);
}



reverseInt(-67);
reverseInt(570);

module.exports = reverseInt;
