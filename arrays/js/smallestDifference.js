/*
	Smallest Difference
	Write a function that takes in two non-empty arrays of integers, finds the
	pair of numbers (one from each array) whose absolute difference is closest
	to zero, and returns an array containing these two numbers, with the
	number from the first array in the first position.
	Note that the absolute difference of two integers is the distance between
	them on the real number line. For example, the absolute difference of -5 and
	5 is 10, and the absolute difference of -5 and -4 is 1.
	You can assume that there will only be one pair of numbers with the
	smallest difference.
	Sample Input
	arrayOne= [-1, 5, 10, 20, 28, 3]
	arrayTwo= [26, 134, 135, 15, 171]
	Sample output:
	[28,26]
	*/

const smallestDifference = (arrayOne, arrayTwo) => {
	let min = [Number.MIN_VALUE, Number.MAX_VALUE];
	arrayOne.sort((a, b) => a - b);
	arrayTwo.sort((a, b) => a - b);
	let i = 0;
	let j = 0;
	while (i < arrayOne.length && j < arrayTwo.length) {
		let num1 = arrayOne[i];
		let num2 = arrayTwo[j];
		if (Math.abs(num1 - num2) < Math.abs(min[0] - min[1])) {
			min = [num1, num2];
		}
		if (num1 < num2) {
			i++;
		} else if (num1 > num2) {
			j++;
		} else if (num1 === num2) {
			return [num1, num2];
		}
	}
	return min;
};
let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15, 171];
console.log(smallestDifference(arrayOne, arrayTwo));
