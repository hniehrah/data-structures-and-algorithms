'use strict';

const Node = require('./node');

class Stack{
  constructor(){
    this.front = null;
  }
  push(value){
    const temp = this.front;
    this.front = new Node(value);
    this.front.next = temp;
  }
  pop(){
    const output = this.front;
    this.front = this.front.next;
    return output;
  }
  peek(){
    return this.front.value;
  }
}

module.exports = Stack;