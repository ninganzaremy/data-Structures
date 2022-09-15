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
