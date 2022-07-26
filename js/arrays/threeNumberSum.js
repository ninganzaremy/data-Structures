/*Three Number Sum O
	Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets. The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.If no three numbers sum up to the target sum, the function should return an empty array.
	
	Sample Input
	array = [12, 3, 1, 2, -6, 5, -8, 6];
	targetSum=0
	Sample Output
	[([-8, 2, 6], [-8, 3, 5], [-6, 1, 5])]; */

const threeNumberSum = (array, targetsum) => {
	const res = [];
	const sorted = array.sort((a, b) => a - b);
	for (let index = 0; index < sorted.length; index++) {
		// OPTIMISATION
		if (array[index] >= targetsum) {
			break;
		}
		let start = index + 1,
			end = sorted.length - 1;
		while (start < end) {
			const sum = sorted[index] + sorted[start] + sorted[end];
			if (sum === targetsum) {
				res.push([sorted[index], sorted[start], sorted[end]]);
				start++;
				end--;
			} else if (sum < targetsum) {
				start++;
			} else {
				end--;
			}
		}
	}
	return res;
};
let array = [12, 3, 1, 2, -6, 5, -8, 6];
let targetsum = 0;
console.log(threeNumberSum(array, targetsum));
