//First Duplicate Value
/*Given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function thatreturns the first integer that appears more than once (when the array is read fromleft to right).
In other words, out of all the integers that might occur more than once in the input array, your function should return the one whose first duplicate value has the minimum index.
If no integer appears more than once, your function should return -1
Note that you're allowed to mutate the input array.*/
//Sample Input #1
array = [2, 1, 5, 2, 3, 3, 4];
//Sample output:
2; // 2 is the first integer that appears more than once

function firstDuplicatedValue(array) {
	var myMap = new Map(); // Hashmap
	for (let i = 0; i < array.length; i++) {
		//O(n)
		if (myMap.has(array[i])) {
			// search O(1)
			return array[i];
		} else {
			myMap.set(array[i], true); // insert O(1)
		}
	}
	return -1;
}
console.log(firstDuplicatedValue(array));
