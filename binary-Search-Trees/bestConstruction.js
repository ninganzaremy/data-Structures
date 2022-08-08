/*BST Construction O
Write a BST class for a Binary Search Tree. The class should support:
• Inserting values with the insert method.
• Removing values with the remove method; this method should only remove the first
instance of a given value.
• Searching for values with the contains method.
Note that you can't remove values from a single-node tree. In other words, calling the remove
method on a single-node tree should simply not do anything.
Each BST node has an integer value, a left child node, and a right child node. A node is
said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null
Sample Usage

// Assume the following BST has already been created:
                        10
                      /    \                    
                     5      15
                   /  \     / \
                  2    5   13  22
                 /           \
                1             14
                

insert(12):
                        10
                      /    \                    
                     5      15
                   /  \     / \
                  2    5   13  22
                 /        /  \
                1       12    14
                

removeEventListener(10):
                        12
                      /    \                    
                     5      15
                   /  \     / \
                  2    5   13  22
                 /           \
                1             14
contains(15):true  */

class BST {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
	/*Average: O(log(n)) time | O(1) space;
  Worst: O(n) time | O(1) space*/
	insert(value) {
		let currentNode = this;
		while (true) {
			if (value < currentNode.value) {
				if (currentNode.left === null) {
					currentNode.left = new BST(value);
					break;
				} else {
					currentNode = currentNode.left;
				}
			} else {
				if (currentNode.right === null) {
					currentNode.right = new BST(value);
					break;
				} else {
					currentNode = currentNode.right;
				}
			}
		}
		return this;
	}
	/*Average: O(log(n)) time | O(1) space;
  Worst: O(n) time | O(1) space*/
	contains(value) {
		let currentNode = this;
		while (currentNode !== null) {
			if (value < currentNode.value) {
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				currentNode = currentNode.right;
			} else {
				return true;
			}
		}
		return false;
	}
	/*Average: O(log(n)) time | O(1) space;
  Worst: O(n) time | O(1) space*/
	remove(value, parentNode = null) {
		let currentNode = this;
		while (currentNode !== null) {
			if (value < currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.left;
			} else if (value > currentNode.value) {
				parentNode = currentNode;
				currentNode = currentNode.right;
			} else {
				currentNode.shuffleNodes(currentNode, parentNode);
				break;
			}
		}
		return this;
	}
	/*Average: O(log(n)) time | O(1) space;
  Worst: O(n) time | O(1) space*/
	shuffleNodes(currentNode, parentNode) {
		const leftNodeExists = currentNode.left !== null,
			rightNodeExists = currentNode.right !== null;
		if (leftNodeExists && rightNodeExists) {
			currentNode.value = currentNode.right.getMinValue();
			currentNode.right.remove(currentNode.value, currentNode);
		} else if (parentNode === null) {
			if (leftNodeExists) {
				currentNode.value = currentNode.left.value;
				currentNode.right = currentNode.left.right;
				currentNode.left = currentNode.left.left;
			} else if (rightNodeExists) {
				currentNode.value = currentNode.right.value;
				currentNode.left = currentNode.right.left;
				currentNode.right = currentNode.right.right;
			} else {
			}
		} else if (parentNode.left === currentNode) {
			parentNode.left = leftNodeExists ? currentNode.left : currentNode.right;
		} else if (parentNode.right === currentNode) {
			parentNode.right = leftNodeExists ? currentNode.left : currentNode.right;
		}
	}

	getMinValue() {
		let currentNode = this;
		while (currentNode.left !== null) {
			currentNode = currentNode.left;
		}
		return currentNode.value;
	}
}
