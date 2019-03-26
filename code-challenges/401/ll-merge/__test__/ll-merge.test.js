'use strict';

const LinkedList = require('../ll-merge');

describe('Test', () => {

  it('should zipper merge two linked lists with the same amount of nodes successfully', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    let newList = new LinkedList();

    [1,3].map(num => listA.add(num));
    [2,4].map(num => listB.add(num));

    expect(newList.mergeLists(listA, listB).value).toEqual(1);
    expect(newList.mergeLists(listA, listB).next.value).toEqual(2);
    expect(newList.mergeLists(listA, listB).next.next.value).toEqual(3);
  });

  it('should zipper merge two linked lists successfully, where listA contains more nodes than listB', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    let newList = new LinkedList();

    [1,3].map(num => listA.add(num));
    [2].map(num => listB.add(num));

    expect(newList.mergeLists(listA, listB).value).toEqual(1);
    expect(newList.mergeLists(listA, listB).next.value).toEqual(2);
    expect(newList.mergeLists(listA, listB).next.next.value).toEqual(3);
  })

});