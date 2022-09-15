/*Write a function that takes in an n x m two-dimensional array (that can be square-shaped when n == m and returns a one-dimensional array of all the array's elements in spiral order.
Spiral order starts at the top left corner of the two-dimensional array, goes to the right, and
proceeds in a spiral pattern all the way until every element has been visited.
Sample Input
array=[
[1,2,3, 4],
[12, 13, 14, 5],
[11, 16, 15, 6],
[10, 9, 8, 7],
]
Sample Output
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]*/
const spiralTraverse = (array) => {
	let rowStart = 0,
		rowEnd = array.length - 1;
	let colStart = 0,
		colEnd = array[0].length - 1;
	let res = [];
	while (true) {
		traverseRight(array, rowStart, colStart, colEnd, res);
		rowStart++;
		if (rowStart > rowEnd) break;
		traverseDown(array, colEnd, rowStart, rowEnd, res);
		colEnd--;
		if (colStart > colEnd) break;
		traverseLeft(array, rowEnd, colStart, colEnd, res);
		rowEnd--;
		if (rowStart > rowEnd) break;
		traverseUp(array, colStart, rowStart, rowEnd, res);
		colStart++;
		if (colStart > colEnd) break;
	}
	return res;
};

const traverseRight = (array, row, startCol, endcol, res) => {
	for (let index = startCol; index <= endcol; index++) {
		res.push(array[row][index]);
	}
};

const traverseLeft = (array, row, startCol, endCol, res) => {
	for (let index = endCol; index >= startCol; index--) {
		res.push(array[row][index]);
	}
};

const traverseDown = (array, col, startRow, endRow, res) => {
	for (let index = startRow; index <= endRow; index++) {
		res.push(array[index][col]);
	}
};

const traverseUp = (array, col, startRow, endRow, res) => {
	for (let index = endRow; index >= startRow; index--) {
		res.push(array[index][col]);
	}
};

array = [
	[1, 2, 3, 4],
	[12, 13, 14, 5],
	[11, 16, 15, 6],
	[10, 9, 8, 7],
];
console.log(spiralTraverse(array));
