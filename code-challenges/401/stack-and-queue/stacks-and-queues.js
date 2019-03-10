'use strict';

const Node = require('./node');

class Stack{
  constructor(){
    this.top = null;
  }
  push(value){
    const temp = this.top;
    this.top = new Node(value);
    this.top.next = temp;
  }
  pop(){
    const output = this.top.value; // Assigns the to-be popped value to a variable that will later be returned.
    this.top = this.top.next; // H"Liana - moves the 'next' value into the top position
    return output;
  }
  peek(){
    return this.top.value;
  }
}

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }
  enqueue(value){
    // Worked with Skyler on this portion
    let newNode = new Node(value);

    if (this.rear === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue(){
    const output = this.front.value;
    if (this.front || this.front.next) {
      this.front = this.front.next;
    }
    if (this.front === null) this.rear = null;
    return output;
  }

  peek(){
    return this.front.value;
  }

}

module.exports = { Stack, Queue };