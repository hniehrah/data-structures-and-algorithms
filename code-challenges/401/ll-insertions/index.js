'use strict';

const Node = require('./node');

class LinkedList{
  constructor(){
    this.head = null;
  }

  append(value){
    const newNode = new Node(value);
    let current = this.head;

    while(current.next){
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(value, newValue){
    const newNode = new Node(newValue);
    let current = this.head;

    if (current.value === value){
      newNode.next = current;
      this.head = newNode;
    } else{
      while(current.next.value !== value) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  insertAfter(value, newValue){
    const newNode = new Node(newValue);
    let current = this.head;

    while(current.next.value !== value){
      current = current.next;
    }

    newNode.next = current.next.next;
    current.next.next = newNode;
  }

  insertAtHead(value){
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // For testing
  printNodeValues(){
    let output = [];
    let current = this.head;
    while(current.next){
      output.push(current.value);
      current = current.next;
    }
    output.push(current.value);
    return output;
  }
}

module.exports = LinkedList;