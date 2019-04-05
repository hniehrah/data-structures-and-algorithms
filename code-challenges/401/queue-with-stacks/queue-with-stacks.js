'use strict';

const Stack = require('./stack');

class PseudoQueue{
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = null;
  }
  enqueue(value){
    this.stack1.push(value);
    let current = this.stack1.front;
    this.stack2 = new Stack();
    while(current){
      this.stack2.push(current.value);
      current = current.next;
    }
  }
  dequeue(){
    if (this.stack2 === null && this.stack1 === null){
      return 'Nothing to pop';
    } else if (this.stack1 !== null && this.stack2 === null){
      return this.stack1.pop().value;
    } else{
      return this.stack2.pop().value;
    }
  }
}

module.exports = PseudoQueue;