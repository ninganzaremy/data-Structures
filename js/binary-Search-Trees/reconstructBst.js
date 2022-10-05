/*
ReconstructBST
The pre-order traversal of a Binary Tree is a traversal technique that starts at the
tree's root node and visits nodes in the following order:
1. Current node
2. Left subtree
3. Right subtree
Given a non-empty array of integers representing the pre-order traversal of a
Binary Search Tree (BST), write a function that creates the relevant BST and
returns its root node.

The input array will contain the values of BST nodes in the order in which these
nodes would be visited with a pre-order traversal.

Each BST node has an integer value, a left child node, and a right child
node. A node is said to be a valid BST node if and only if it satisfies the BST
property: its value is strictly greater than the values of every node to its left; its
value is less than or equal to the values of every node to its right; and its
children nodes are either valid BST nodes themselves or None / null

Sample Input
preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]

Sample Output :
                                               10
                                              /  \
                                             4    17
                                            / \     \
                                           2   5    19
                                          /        /
                                         1        18

*/

class BST {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }

    insert(value) {
        if (value < this.value) {
            if (this.left) this.left.insert(value);
            else this.left = new BST(value);
        } else {
            if (this.right) this.right.insert(value);
            else this.right = new BST(value);
        }
    }

}

const reconstructBst = preOrderTraversalValues => {
    const root = new BST(preOrderTraversalValues[0]);
    for (let i = 1; i < preOrderTraversalValues.length; i++) {
        root.insert(preOrderTraversalValues[i]);
    }
    return (root);
}
preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18];
console.log(reconstructBst(preOrderTraversalValues));