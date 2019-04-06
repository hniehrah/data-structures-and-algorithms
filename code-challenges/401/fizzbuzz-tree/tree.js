'use strict';

class BinaryTree{
  constructor(root = null){
    this.root = root;
  }
}

const preOrder = (root, arr) => {
  //Base Case
  if (root === null){
    return;
  }

  //Recursive case - Root / left / right
  arr.push(root.value);
  preOrder(root.left, arr);
  preOrder(root.right, arr);
  return arr;
};

module.exports = {BinaryTree, preOrder};