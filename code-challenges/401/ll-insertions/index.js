'use strict';

const Node = require('./node');

class LinkedList{
  constructor(){
    this.head = null;
  }

  insertAtHead(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertBefore(value, newValue){
    const newNode = new Node(value);
    let current = this.head;
    console.log(current.next)
    while(current.next !== value) current = current.next;
    current.next = newNode;
    newNode.next = current.next;
  }
  insertAfter(value, newValue){
    const newNode = new Node(value);
    let current = this.head;

    while(current.next.value !== value){
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
  }
}

module.exports = LinkedList;