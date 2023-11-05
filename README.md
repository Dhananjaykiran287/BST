# Binary Search Tree Implementation

## Overview

This project implements a Binary Search Tree (BST) using Node.js. The BST is a fundamental data structure that provides efficient insertion, search, traversal, and deletion operations.

## Table of Contents

- Design Decisions
- Algorithms Used
- Local Setup
- Usage

## Design Decisions

### Node and BinarySearchTree Classes

I have structured the project using two main classes:
- `Node`: Represents a single node in the BST, with `key`, `left`, and `right` properties.
- `BinarySearchTree`: Manages the tree structure and provides methods for insertion, deletion, and traversals.

### Recursion

I have used recursion to insert nodes, perform traversals, and delete nodes. Recursion is a natural choice for BST operations because it mirrors the hierarchical nature of trees.

## Algorithms Used

### Insertion Algorithm

I have used a recursive algorithm for inserting nodes:
1. Start at the root.
2. If the tree is empty, create a new node as the root.
3. If the new key is less than the current node's key, go left; otherwise, go right.
4. Repeat the process for the left or right subtree until an empty spot is found.

### Search Algorithm
I have also implemented a recursive algorithm for searching nodes within the Binary Search Tree:

1.Start at the root.
2.If the tree is empty or the current node's key matches the target key, return the current node.
3.If the target key is less than the current node's key, search in the left subtree.
4.If the target key is greater than the current node's key, search in the right subtree.
5.Repeat the search process for the left or right subtree until the target key is found or the tree is exhausted.
6.To utilize the search functionality, call the search(key) method on a BinarySearchTree instance. It will return the node with the matching key or null if the key is not found.

### Deletion Algorithm

I have implemented a recursive algorithm for deleting nodes:
1. Start at the root.
2. If the tree is empty, return null.
3. If the key to be deleted is less than the current node's key, go left and update the left subtree.
4. If the key to be deleted is greater than the current node's key, go right and update the right subtree.
5. If the key to be deleted matches the current node's key:
   - If the current node has no children, return null.
   - If the current node has one child, return the non-empty child.
   - If the current node has two children, find the in-order successor (the smallest node in the right subtree), copy its key to the current node, and recursively delete the in-order successor.

### Traversal Algorithms

I have implemented three main traversal algorithms:
- In-order: Visit the left subtree, the current node, and the right subtree.
- Pre-order: Visit the current node, the left subtree, and the right subtree.
- Post-order: Visit the left subtree, the right subtree, and the current node.

## Local Setup

To set up the project locally, follow these steps:

1. Clone the repository.
2. Install Node.js if you haven't already.
3. Run `npm install` to install project dependencies.

## Usage

To use the Binary Search Tree in your Node.js application, import the `BinarySearchTree` class and create instances. You can insert nodes, delete nodes, and perform traversals as demonstrated in the provided `app.js`.

