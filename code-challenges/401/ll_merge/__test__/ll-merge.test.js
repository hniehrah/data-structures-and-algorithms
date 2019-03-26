'use strict';

const LinkedList = require('../ll-merge');

describe('Test', () => {

  it('should zipper merge two linked lists with the same amount of nodes successfully', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    let newList = new LinkedList();

    [1,3].map(num => listA.add(num));
    [2,4].map(num => listB.add(num));

    let mergedList = newList.mergeLists(listA, listB);
    expect(mergedList.value).toEqual(1);
    expect(mergedList.next.value).toEqual(2);
    expect(mergedList.next.next.value).toEqual(3);
    expect(mergedList.next.next.next.value).toEqual(4);
  });

  it('should zipper merge two linked lists successfully, where listA contains more nodes than listB', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    let newList = new LinkedList();

    [1,3].map(num => listA.add(num));
    [2].map(num => listB.add(num));

    let mergedList = newList.mergeLists(listA, listB);

    expect(mergedList.value).toEqual(1);
    expect(mergedList.next.value).toEqual(2);
    expect(mergedList.next.next.value).toEqual(3);
  });

  it('should zipper merge two linked lists successfully, where listB contains more nodes than listA', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    let newList = new LinkedList();

    [1].map(num => listA.add(num));
    [2,3].map(num => listB.add(num));

    let mergedList = newList.mergeLists(listA, listB);

    expect(mergedList.value).toEqual(1);
    expect(mergedList.next.value).toEqual(2);
    expect(mergedList.next.next.value).toEqual(3);
  });

  it('should return listA if listB is empty', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    let newList = new LinkedList();

    [1,2,3].map(num => listA.add(num));

    let mergedList = newList.mergeLists(listA, listB);

    expect(mergedList).toEqual(listA.head);
    expect(mergedList.value).toEqual(1);
  });

  it('should return listB if listA is empty', () => {
    let listA = new LinkedList();
    let listB = new LinkedList();
    let newList = new LinkedList();

    [1,2,3].map(num => listB.add(num));

    let mergedList = newList.mergeLists(listA, listB);

    expect(mergedList).toEqual(listB.head);
    expect(mergedList.value).toEqual(listB.head.value);
  });

});