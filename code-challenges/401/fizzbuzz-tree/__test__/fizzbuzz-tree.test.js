'use strict';

const Node = require('../node');
const Tree = require('../tree');
const fizzbuzz = require('../fizzbuzz-tree');


describe('Fizzbuzz tree test', () => {

  const one = new Node(15);
  const three = new Node(9);

  one.left = new Node(6);
  one.right = new Node(2);
  three.left = new Node(12);
  three.right = new Node(5);

  const bt = new Tree.BinaryTree(one);
  const test = fizzbuzz(bt.root);

  it(`should return 'fizz' if value is divisible by 3`, () => {

    console.log(result)
    expect(Tree.preOrder(test, [])).toBeTruthy();

  });

  it(`should return 'buzz' if value is divisible by 5`, () => {

  });

  it(`should return 'fizzbuzz' if value is divisible by both 3 and 5`, () => {

  });

  it(`should return the same value if value is not divisible by either 3 or 5`, () => {

  });

});