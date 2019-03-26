'use strict';

const Node = require('./node');

class LinkedList{
  constructor(){
    this.head = null;
  }

  add(value){
    const newNode = new Node(value);
    let current = this.head;

    if (current === null){
      this.head = newNode;
    } else {
      while(current.next){
        current = current.next;
      }
      current.next = newNode;
    }

  }

  mergeLists(a, b){

    this.head = a.head;

    let currentA = a.head;
    let currentB = b.head;

    let node = this.head;

    while (currentA || currentB){

      if (a.head === null){
        return b.head;
      } else if (b.head === null){
        return a.head;
      }

      if (currentA) currentA = currentA.next;

      if (currentB){
        node.next = currentB; //2
        currentB = currentB.next; //4
        node = node.next; //2
      }
      if (currentA){
        node.next = currentA; //3
        currentA = currentA.next; //3
        node = node.next; //3
      }

    }
    return this.head;
  }

}

module.exports = LinkedList;