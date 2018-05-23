// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
	let numberSign = Math.sign(n);
	let reversedNumber = "";

	if(numberSign === -1){
		let absNumber = Math.abs(n).toString().split("");
		for(let i = absNumber.length-1; i >= 0; i--){
			reversedNumber += absNumber[i];
		}
		let newNumber = parseInt(reversedNumber);
		console.log(newNumber);
		return -Math.abs(newNumber);
	}else{
		let tempNumber = n.toString().split("");
		for(let i = tempNumber.length-1; i >= 0; i--){
			reversedNumber += tempNumber[i];
		}
		let newNumber = parseInt(reversedNumber);
		console.log(newNumber);
		return newNumber;
	}
}



reverseInt(-67);
reverseInt(570);

module.exports = reverseInt;
