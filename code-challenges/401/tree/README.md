# Code: Trees
=================================================

## Trees

### Author: HN

### Links and Resources
* [repo](https://github.com/xenalara/data-structures-and-algorithms/tree/master/code-challenges/401/tree)

#### Description
Code Challenge Practice implementing a tree.


## Challenge
* Create a `Node` class that has properties for the value stored in the node, the left child node, and the right child node.
* Create a `BinaryTree` class
  * Define a method for each of the depth first traversals called `preOrder`, `inOrder`, and `postOrder` which returns an array of the values, ordered appropriately.
  
* Create a BinarySearchTree class
  * Define a method named `add` that accepts a `value`, and adds a new node with that value in the correct location in the binary search tree.
  * Define a method named `contains` that accepts a `value`, and returns a boolean indicating whether or not the value is in the tree at least once.

## Tests
* `npm test`
* Can successfully instantiate an empty tree
* Can successfully instantiate a tree with a single root node
* Can successfully add a left child and right child to a single root node
* Can successfully return a collection from a preorder traversal
* Can successfully return a collection from an inorder traversal
* Can successfully return a collection from a postorder traversal
* Can successfully add to a binary search tree in the proper order
* Can successfully check if a binary search tree contains a given value.