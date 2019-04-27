'use strict';

const Node = require('../node');
const BinaryTree = require('../tree');
const breadthFirst = require('../breadth-first');

describe('Tests breadth-first traversal of a binary tree', () => {

  it('Successfully traverses binary tree breadth first. (Expected outcome)', () => {

    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;

    const tree = new BinaryTree(one);
    const test = breadthFirst(tree.root, []);

    expect(test).toEqual([1,2,3,4,5]);
    expect(test.length).toEqual(5);

  });

  it('Successfully traverses binary tree breadth first. (Expected outcome)', () => {

    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);

    one.left = two;
    two.right = three;
    three.left = four;

    const treeTwo = new BinaryTree(one);
    const testTwo = breadthFirst(treeTwo.root, []);

    expect(testTwo).toEqual([1,2,3,4]);
    expect(testTwo.length).toEqual(4);

  });

  it('Returns a notification if root is empty. (edge case/failure)', () => {

    const emptyTree = new BinaryTree();
    const emptyTest = breadthFirst(emptyTree.root, []);

    expect(emptyTest).toEqual('Root is empty.');

  });

});