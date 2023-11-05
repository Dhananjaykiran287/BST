// binarySearchTree.js

class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(key) {
        this.root = this._insertRecursively(this.root, key);
    }

    _insertRecursively(node, key) {
        if (node === null) {
            return new Node(key);
        }

        if (key < node.key) {
            node.left = this._insertRecursively(node.left, key);
        } else {
            node.right = this._insertRecursively(node.right, key);
        }

        return node;
    }

    inOrderTraversal() {
        const result = [];
        this._inOrderTraversal(this.root, result);
        return result;
    }

    _inOrderTraversal(node, result) {
        if (node !== null) {
            this._inOrderTraversal(node.left, result);
            result.push(node.key);
            this._inOrderTraversal(node.right, result);
        }
    }

    preOrderTraversal() {
        const result = [];
        this._preOrderTraversal(this.root, result);
        return result;
    }

    _preOrderTraversal(node, result) {
        if (node !== null) {
            result.push(node.key);
            this._preOrderTraversal(node.left, result);
            this._preOrderTraversal(node.right, result);
        }
    }

    postOrderTraversal() {
        const result = [];
        this._postOrderTraversal(this.root, result);
        return result;
    }

    _postOrderTraversal(node, result) {
        if (node !== null) {
            this._postOrderTraversal(node.left, result);
            this._postOrderTraversal(node.right, result);
            result.push(node.key);
        }
    }

    search(key) {
        return this._searchRecursively(this.root, key);
    }

    _searchRecursively(node, key) {
        if (node === null || node.key === key) {
            return node;
        }

        if (key < node.key) {
            return this._searchRecursively(node.left, key);
        } else {
            return this._searchRecursively(node.right, key);
        }
    }

    delete(key) {
        this.root = this._deleteRecursively(this.root, key);
    }

    _deleteRecursively(node, key) {
        if (node === null) {
            return node;
        }

        if (key < node.key) {
            node.left = this._deleteRecursively(node.left, key);
        } else if (key > node.key) {
            node.right = this._deleteRecursively(node.right, key);
        } else {
            if (node.left === null) {
                return node.right;
            } else if (node.right === null) {
                return node.left;
            }

            node.key = this._minValueNode(node.right);
            node.right = this._deleteRecursively(node.right, node.key);
        }

        return node;
    }

    _minValueNode(node) {
        let minValue = node.key;
        while (node.left !== null) {
            minValue = node.left.key;
            node = node.left;
        }
        return minValue;
    }
}

module.exports = BinarySearchTree;
