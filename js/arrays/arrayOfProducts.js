//Array Of Products
/*Write a function that takes in a non-empty array of integers and returns an array of the same length, where each element in the output array is equal to the product of every other number in the input array.
In other words, the value at output[i] is equal to the product of every number in the input array other than
input[ i ].Note that you're expected to solve this problem without using division.*/

//Sample Input
array = [5, 1, 4, 2];
//Expected Sample output [8, 40, 10, 20];

// Brute Force= O(n^2) time | O(n)space where n is the length of the input array

function arrayOfProducts(array) {
	const products = [];
	let i = 0;
	while (i < array.length) {
		const currNum = array.shift();
		const currTotalProd = array.reduce((a, b) => a * b);
		products[i] = currTotalProd;
		array.push(currNum);
		i++;
	}
	return products;
}
console.log(arrayOfProducts(array));
