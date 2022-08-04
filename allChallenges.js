//Write a function that takes in a non-empty array of integers and returns new array with the squares of the original integers sorted in ascending order
const sortedSquaredArray = (array) => array.map((val) => val * val).sort((b, a) => a - b);

let array = [-4, 1, 6, 2, -5];
console.log(sortedSquaredArray(array));

/* Tournament Winner O
	There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete
	in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated
	the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0
	points if it loses. The winner of the tournament is the team that receives the most amount of points.
	Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the
	winner of the tournament. The input arrays are named competitions and results, respectively. The competitions array has elements in the form of
	[homeTeam, awayTeam], where each team is a string of at most 30 characters representing the name of the team. The results array contains information about the
	winner of each corresponding competition in the competitions array. Specifically, results[i] denotes the winner of competitions[i], where a 1 in the results
	array means that the home team in the corresponding competition won and a © means that the away team won.
	It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament
	will always have at least two teams. 
		//Sample Output
	//"Python"
	// C# beats HTML, Python Beats C#, and Python Beats HIML
	// HTML - 0 points
	// C# - 3 points
	// Python - 6 points
	*/

const tournamentWinner = (competitions, results) => {
	let winner = { score: 0, name: "" };
	const scoreMap = {};
	for (let i = 0; i < competitions.length; i++) {
		let homeTeam = competitions[i][0];
		let awayTeam = competitions[i][1];
		if (results[i] === 0) {
			scoreMap[awayTeam] = (scoreMap[awayTeam] || 0) + 3;
		} else {
			scoreMap[homeTeam] = (scoreMap[homeTeam] || 0) + 3;
		}
		if (scoreMap[awayTeam] >= winner.score) {
			winner = { score: scoreMap[awayTeam], name: awayTeam };
		} else if (scoreMap[homeTeam] >= winner.score) {
			winner = { score: scoreMap[homeTeam], name: homeTeam };
		}
	}
	return winner.name;
};

//Sample Input
let competitions = [
	["HTML", "C#"],
	["C#", "Python"],
	["Python", "HTML"],
];
let results = [0, 0, 1];
console.log(tournamentWinner(competitions, results));

/* Non-Constructible Change ©
	Given an array of positive integers representing the values of coins in your possession write a function that returns the minimum amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).
	For example, if you're given coins= [1, 2, 5] , the minimum amount of change that you can't create is 4. If you're given no coins, the minimum amount of change that you can't create is 1.
	Sample Input
	coins = 15, 7, 1, 1, 2, 3, 221
	Sample Output
	20  */

const nonConstructibleChange = (coins) => {
	if (!coins.length) return 1;
	coins.sort((a, b) => a - b);
	let minChange = 0;
	for (let index = 0; index < coins.length; index++) {
		if (coins[index] > minChange + 1) break;
		minChange += coins[index];
	}
	return minChange + 1;
};
let coins = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(coins));

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
array = [12, 3, 1, 2, -6, 5, -8, 6];
let targetsum = 0;
console.log(threeNumberSum(array, targetsum));

/*
Find Closest Value In BST O
Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns
the closest value to that target value contained in the BST.
You can assume that there will only be one closest value.
Each BST node has an integer value, a left child node, and a right child node. A node
is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly
greater than the values of every node to its left; its value is less than or equal to the values of
every node to its right; and its children nodes are either valid BST nodes themselves or None
null
Sample Input
tree
										10
								5       15 
							2	  5  13     22
						1           14							 
								
target = 12
Sample Output
13
*/

const dfs = (tree, target, diff) => {
	if (!tree) return;
	const currentDiff = Math.abs(target - tree.value);
	if (currentDiff < diff.value) {
		diff.closest = tree.value;
		diff.value = currentDiff;
	}
	if (target < tree.value) dfs(tree.left, target, diff);
	else if (target > tree.value) dfs(tree.right, target, diff);
};
const findclosestValueInBst = (tree, target) => {
	const diff = { value: Infinity, closest: null };
	dfs(tree, target, diff);
	return diff.closest;
};
// This is the class of the input tree. Do not
class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

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
