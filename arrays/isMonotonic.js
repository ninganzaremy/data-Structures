/*Monotonic Array
Write a function that takes in an array of integers and returns a boolean
representing whether the array is monotonic.
An array is said to be monotonic if its elements, from left to right, are entirely non-increasing or entirely non-decreasing.
Non-increasing elements aren't necessarily exclusively decreasing; they simply don't increase. Similarly, non-decreasing elements aren't necessarily exclusively increasing; they simply don't decrease.
Note that empty arrays and arrays of one element are monotonic.
Sample Input
array=[1, -5, -10,-1100,-1100,-1101,-1102,-9001]
Sample Output
true */

const isMonotonic = (array) => {
	let increasing = true;
	let decreasing = true;
	for (let i = 1; i < array.length; i++) {
		if (isIncreasing(array[i], array[i - 1])) {
			decreasing = false;
		}
		if (isDecreasing(array[i], array[i - 1])) {
			increasing = false;
		}
	}
	return increasing || decreasing;
};
const isIncreasing = (a, b) => {
	return a > b;
};
const isDecreasing = (a, b) => {
	return a < b;
};
array = [1, -5, -10, -1100, -1100, -1101, -1102, -9001];
console.log(isMonotonic(array));
