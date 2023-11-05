// test/binarySearchTree.test.js

const { expect } = require('chai');
const BinarySearchTree = require('../bst');

describe('BinarySearchTree', () => {
    it('should insert nodes correctly', () => {
        const tree = new BinarySearchTree();
        tree.insert(25);
        tree.insert(15);
        tree.insert(10);
        tree.insert(4);
        tree.insert(12);
        tree.insert(22);
        tree.insert(18);
        tree.insert(24);
        tree.insert(50);
        tree.insert(35);
        tree.insert(31);
        tree.insert(44);
        tree.insert(70);
        tree.insert(66);
        tree.insert(90);

        const result = tree.inOrderTraversal();
        expect(result).to.deep.equal([4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]);
    });

    it('should perform in-order traversal', () => {
        const tree = new BinarySearchTree();
        // Insert nodes
        const nodes = [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90];
        nodes.forEach((key) => tree.insert(key));

        const result = tree.inOrderTraversal();
        expect(result).to.deep.equal([4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]);
    });

    it('should perform pre-order traversal', () => {
        const tree = new BinarySearchTree();
        // Insert nodes
        const nodes = [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90];
        nodes.forEach((key) => tree.insert(key));

        const result = tree.preOrderTraversal();
        expect(result).to.deep.equal([25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]);
    });

    it('should perform post-order traversal', () => {
        const tree = new BinarySearchTree();
        // Insert nodes
        const nodes = [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90];
        nodes.forEach((key) => tree.insert(key));

        const result = tree.postOrderTraversal();
        expect(result).to.deep.equal([4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]);
    });
});
