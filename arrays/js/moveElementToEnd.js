/**Move Element To End O
You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.
The function should perform this in place (i.e., it should mutate the input array) and doesn't need to maintain the order of the other integers.
Sample Input
array = [2, 1, 2, 2, 2, 3, 4, 2]
toMove= 2
Sample Output
[1, 3,4, 2, 2, 2, 2, 2] // the numbers 1,
3, and 4 could be ordered differently */

const moveElementToEnd = (array, toMove) => {
	// Write your code here.
	let i = 0;
	let j = array.length - 1;
	while (i < j) {
		while (i < j && array[j] == toMove) {
			j -= 1;
		}
		if (array[i] == toMove) {
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		i += 1;
	}
	return array;
};
array = [2, 1, 2, 2, 2, 3, 4, 2];
toMove = 2;
console.log(moveElementToEnd(array, toMove));
