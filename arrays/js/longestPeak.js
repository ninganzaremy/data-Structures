/*Longest Peak
Write a function that takes in an array of integers and returns the length of the longest peak in the array.
A peak is defined as adjacent integers in the array that are strictly increasing until they reach a tip (the highest value in the
peak), at which point they become strictly decreasing. At least three integers are required to form a peak.
For example, the integers 1, 4, 10, 2 form a peak, but the integers 4, 0, 10 don't and neither do the integers
1, 2, 2, 0. Similarly, the integers 1, 2, 3 don't form a peak because there aren't any strictly decreasing integers after
the 3.
Sample Input
array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
Sample Output
6 // 0, 10, 6, 5,-1, -3*/
const longestPeak = (arr) => {
	const UP = 1;
	const FLAT = 0;
	const DOWN = -1;
	let state = FLAT;
	let maxLength = 0;
	let length = 0;
	if (arr.length < 3) return 0;
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < arr[i + 1]) {
			if (state == DOWN) length = 0;
			state = UP;
			length = length == 0 ? 2 : length + 1;
		}
		if (arr[i] > arr[i + 1] && state != FLAT) {
			state = DOWN;
			length++;
			maxLength = Math.max(length, maxLength);
		}
		if (arr[i] == arr[i + 1]) {
			state = FLAT;
			length = 0;
		}
	}
	return maxLength;
};
arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
console.log(longestPeak(arr));
