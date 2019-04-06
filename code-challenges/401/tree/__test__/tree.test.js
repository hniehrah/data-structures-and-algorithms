'use strict';

const tree = require('../tree');

describe('Binary Tree & Binary Search Tree tests', () => {

  it('Can successfully instantiate an empty tree', () => {

    const bt = new tree.BinaryTree();
    const bst = new tree.BinarySearchTree();

    expect(bt.root).toBeNull();
    expect(bst.root).toBeNull();
    expect(bt).toBeDefined();
    expect(bst).toBeDefined();

  });

  it('Can successfully instantiate a tree with a single root node', () => {

    const bt = new tree.BinaryTree(new tree.Node(2));
    const bst = new tree.BinarySearchTree(new tree.Node(2));

    expect(bt.root.value).toBe(2);
    expect(bst.root.value).toBe(2);

  });

  it('Can successfully add a left child and right child to a single root node', () => {

    const one = new tree.Node(1);
    const two = new tree.Node(2);
    const three = new tree.Node(3);

    one.left = two;
    one.right = three;

    const bt = new tree.BinaryTree(one);
    const bst = new tree.BinarySearchTree(one);

    expect(bt.root.left.value).toBe(2);
    expect(bt.root.right.value).toBe(3);
    expect(bst.root.left.value).toBe(2);
    expect(bst.root.right.value).toBe(3);

  });

  it('Can successfully return a collection from a preorder traversal', () => {

    const one = new tree.Node(1);
    const two = new tree.Node(2);
    const three = new tree.Node(3);

    one.left = two;
    one.right = three;
    three.left = new tree.Node(4);
    three.right = new tree.Node(5);

    const bt = new tree.BinaryTree(one);

    expect(tree.preOrder(bt.root, [])).toEqual([1,2,3,4,5]);

  });

  it('Can successfully return a collection from an inorder traversal', () => {

    const one = new tree.Node(1);
    const two = new tree.Node(2);
    const three = new tree.Node(3);

    one.left = two;
    one.right = three;
    three.left = new tree.Node(4);
    three.right = new tree.Node(5);

    const bt = new tree.BinaryTree(one);

    expect(tree.inOrder(bt.root, [])).toEqual([2,1,4,3,5]);

  });

  it('Can successfully return a collection from a postorder traversal', () => {

    const one = new tree.Node(1);
    const two = new tree.Node(2);
    const three = new tree.Node(3);

    one.left = two;
    one.right = three;
    three.left = new tree.Node(4);
    three.right = new tree.Node(5);

    const bt = new tree.BinaryTree(one);

    expect(tree.postOrder(bt.root, [])).toEqual([2,4,5,3,1]);

  });

  it('Can successfully add to a binary search tree in the proper order', () => {

    const bst = new tree.BinarySearchTree();
    [3,1,2,4,5].forEach(num => bst.add(num));

    expect(bst.root.value).toEqual(3);
    expect(bst.root.left.value).toEqual(1);
    expect(bst.root.left.right.value).toEqual(2);
    expect(bst.root.right.value).toEqual(4);
    expect(bst.root.right.right.value).toEqual(5);

  });

  it('Can successfully check if a binary search tree contains a given value.', () => {

    const bst = new tree.BinarySearchTree();
    [3,1,2,4,5].forEach(num => bst.add(num));

    expect(bst.contains(3)).toEqual(true);
    expect(bst.contains(4)).toEqual(true);
    expect(bst.contains(10)).toEqual(false);

  });

});