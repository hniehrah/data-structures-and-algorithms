'use strict';

const Node = require('./node');

class LinkedList{
  constructor(){
    this.head = null;
  }
  // H'Liana Kept in from previous CC for testing purposes
  insertAtHead(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  findKthValue(k) {
    let counter = 0;
    let current = this.head;

    while (current.next !== null) {
      current = current.next;
      counter++;
    }

    if (counter < k || k < 0 || typeof k !== 'number') {
      return 'Exception'
    } else {
      let current = this.head;
      for (let i = 0; i < (counter - k); i++) {
        current = current.next;
      }
      return current.value;
    }
  }
}

module.exports = LinkedList;