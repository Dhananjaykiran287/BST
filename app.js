// app.js

const BinarySearchTree = require('./bst');
const tree = new BinarySearchTree();

// Insert nodes
const nodes = [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90];
nodes.forEach((key) => tree.insert(key));

// Perform traversals
console.log('In-order traversal:');
console.log(tree.inOrderTraversal());

console.log('Pre-order traversal:');
console.log(tree.preOrderTraversal());

console.log('Post-order traversal:');
console.log(tree.postOrderTraversal());

// Search for a node with a specific key
const searchKey = 35;
const foundNode = tree.search(searchKey);
if (foundNode) {
    console.log(`Node with key ${searchKey} found.`);
} else {
    console.log(`Node with key ${searchKey} not found.`);
}

// Delete a node with a specific key
const deleteKey = 4;
tree.delete(deleteKey);
console.log(`Deleted node with key ${deleteKey}.`);

// Perform in-order traversal after deleting a node
console.log('In-order traversal after deletion:');
console.log(tree.inOrderTraversal());

console.log('Pre-order traversal after deletion:');
console.log(tree.preOrderTraversal());

console.log('Post-order traversal after deletion:');
console.log(tree.postOrderTraversal());
