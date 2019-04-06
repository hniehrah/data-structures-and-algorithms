'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//=============================================
//BINARY TREE
//=============================================

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

const inOrder = (root, arr) => {
  //Base case
  if (root === null) {
    return;
  }

  //Recursive case - left / root / right
  inOrder(root.left, arr);
  arr.push(root.value);
  inOrder(root.right, arr);
  return arr;
}

const postOrder = (root, arr) => {
  //Base Case
  if (root === null){
    return;
  }

  //Recursive case - left / right / root
  postOrder(root.left, arr);
  postOrder(root.right, arr);
  arr.push(root.value);
  return arr;
};

//=============================================
//BINARY SEARCH TREE
//=============================================

class BinarySearchTree {
  constructor(root = null){
    this.root = root;
  }
  add(value) {
    const newNode = new Node(value);

    if(!value) {
      throw new Error('cannot insert a null value');
    }

    if(!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while(true) {
      if(newNode.value > current.value) {
        if(!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } else {
        if(!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      }
    }
  }

  contains(value){

    if(!value){
      throw new Error('cannot find a null value');
    }
    if(!this.root){
      throw new Error('value does not exist');
    }
    if(value.value === this.root){
      return true;
    }

    let current = this.root;
    let found = false;

    while(!found){

      if (current && value > current.value){
        current = current.right;
      } else if (current && value < current.value){
        current = current.left;
      } else if (current && value === current.value){
        return true;
      } else {
        return false;
      }

    }
  }
}

module.exports = { Node, BinarySearchTree, BinaryTree, preOrder, postOrder, inOrder };