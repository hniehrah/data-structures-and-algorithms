'use strict';

const Node = require('../node');
const BinaryTree = require('../tree');
const fizzbuzz = require('../fizzbuzz-tree');


describe('Fizzbuzz tree test', () => {

  const one = new Node(5);
  const two = new Node(3);
  const three = new Node(15);
  const four = new Node(9);
  const five = new Node(12);

  one.left = two;
  one.right = three;
  three.left = four;
  three.right = five;

  const bt = new BinaryTree(one);
  const test = fizzbuzz(bt.root);

  it(`should return 'fizz' if value is divisible by 3`, () => {

    expect(test.left.value).toBe('fizz');
    expect(test.right.left.value).toBe('fizz');
    expect(test.right.right.value).toBe('fizz');

  });

  it(`should return 'buzz' if value is divisible by 5`, () => {

    expect(test.value).toBe('buzz');

  });

  it(`should return 'fizzbuzz' if value is divisible by both 3 and 5`, () => {

    expect(test.right.value).toBe('fizzbuzz');

  });

  it(`should return the same value if value is not divisible by either 3 or 5`, () => {

    const bt2 = new BinaryTree(new Node(2));
    const test2 = fizzbuzz(bt2.root);

    expect(test2.value).toBe(2);

  });

});