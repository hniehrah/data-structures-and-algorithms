'use strict';

const Node = require('./node');

class Stack{
  constructor(){
    this.top = null;
  }
  push(value){
    const temp = this.top; // If top !== null, then moves it next
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
  }
  enqueue(value){
    const temp = this.front;
    this.rear = new Node(value);
  }
  dequeue(){

  }
  peek(){
    return this.front.value;
  }
}

module.exports = { Stack, Queue };