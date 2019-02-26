'use strict';

const Node = require('./node');
const ll = require('./index.js');

// Tests still in progress

describe('Linked List testing', () => {
  let list = new LinkedList();
  const createTestList = (ll) => {
    ll.insertAtHead(20);
    ll.insertAtHead(15);
    ll.insertAtHead(10);
    ll.insertAtHead(1);
    return list;
  };
  createTestList(list);

  it('Can successfully add a node to the end of the linked list', () => {
    //test here
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    // Test here
  });
  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    //Test here
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    //Test here
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    //test
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    //test
  });
});
