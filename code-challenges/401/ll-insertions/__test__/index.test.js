'use strict';

const LinkedList = require('../index.js');

describe('Linked List testing', () => {

  it('Can successfully add a node to the end of the linked list', () => {
    const testList = new LinkedList();
    [6, 4, 2].forEach(number => testList.insertAtHead(number));
    testList.append(5);
    let output = testList.printNodeValues();

    expect(output.length).toEqual(4);
    expect(output).toEqual([2, 4, 6, 5]);
  });
  it('Can successfully add multiple nodes to the end of a linked list', () => {
    const testList = new LinkedList();
    [6, 4, 2].forEach(number => testList.insertAtHead(number));
    testList.append(5);
    testList.append(5);
    testList.append(5);
    let output = testList.printNodeValues();

    expect(output.length).toEqual(6);
    expect(output).toEqual([2, 4, 6, 5, 5, 5]);
  });
  it('Can successfully insert a node before a node located in the middle of a linked list', () => {
    const testList = new LinkedList();
    [6, 4, 2].forEach(number => testList.insertAtHead(number));
    testList.insertBefore(4, 3);
    let output = testList.printNodeValues();

    expect(output).toEqual([2, 3, 4, 6]);
    expect(output[2]).toEqual(4);
  });
  it('Can successfully insert a node before the first node of a linked list', () => {
    const testList = new LinkedList();
    [6, 4, 2].forEach(number => testList.insertAtHead(number));
    testList.insertBefore(2, 0);
    let output = testList.printNodeValues();

    console.log(output)

    expect(output[0]).toEqual(0);
    expect(output).toEqual([0, 2, 4, 6]);
    expect(output.length).toEqual(4);
  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    const testList = new LinkedList();
    [6, 4, 2].forEach(number => testList.insertAtHead(number));
    testList.insertAfter(4, 0);
    let output = testList.printNodeValues();

    expect(output).toEqual([2, 4, 0, 6]);
    expect(output.length).toEqual(4);
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    const testList = new LinkedList();
    [6, 4, 2].forEach(number => testList.insertAtHead(number));
    testList.insertAfter(6, 0);
    let output = testList.printNodeValues();

    expect(output).toEqual([2, 4, 6, 0]);
    expect(output.length).toEqual(4);
  });
});
