'use strict';

//=============================================
//NODE Constructor
//=============================================

class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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

  findMaximumValue(root){
    if(root === null){
      return 'Error: root is empty.';
    }

    let current = root;
    let runner = null;

    if (current.right){
      runner = current.right;
    } else if (current.left){
      runner = current.left;
    }

    let running = true;
    while(running) {
      if (runner.right){
        current = runner;
        runner = runner.right;
      } else if (runner.left){
        current = runner;
        runner = runner.left;
      } else {
        running = false;
      }
    }

    if(runner.value > root.value && runner.value < root.right.value) {
      return root.right;
    } else if (runner.value > root.value && runner.value >= root.right.value) {
      return runner;
    } else {
      return root;
    }
  }
}

module.exports = BinarySearchTree;