/*Max Subset Sum No Adjacent O &
Write a function that takes in an array of positive integers and returns the maximum sum of non-adjacent elements in the array.
If the input array is empty, the function should return o
Sample Input
array = [75, 105, 120, 75, 90, 135]
Sample Output
330 // 75 + 120 + 135*/

const maxSubsetSumNoAdjacent = (array) => {
	for (let i = 0; i < array.length; i++) {
		if (i < 2) continue;
		else {
			if (i - 3 < 0) array[i] = array[i - 2] + array[i];
			else {
				let previousMax = Math.max(array[i - 2], array[i - 3]);
				array[i] = previousMax + array[i];
			}
		}
	}
	let index = array.length - 1;
	return array.length === 0 ? 0 : array.length === 1 ? array[0] : Math.max(array[index], array[index - 1]);
};
array = [75, 105, 120, 75, 90, 135];
console.log(maxSubsetSumNoAdjacent(array));
