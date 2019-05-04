'use strict';

const tree = require('../find-max');

describe('Find Max Value in a binary search tree', () => {

  it('can successfully find the max value - edge case: when max value is at root', () => {
    const rootTree = new tree();
    [50,1,2,10,40].forEach(num => rootTree.add(num));

    let rootTreeTest = rootTree.findMaximumValue(rootTree.root);

    expect(rootTreeTest.value).toEqual(50);
  });

  it('can successfully find the max value - expected case', () => {
    const expectedTree = new tree();
    [30,1,2,40,10,50].forEach(num => expectedTree.add(num));

    let expectedTreeTest = expectedTree.findMaximumValue(expectedTree.root);

    expect(expectedTreeTest.value).toEqual(50);
  });

  it('can successfully find the max value - edge case: when max value is at root.right', () => {
    const rightTree = new tree();
    [30,1,2,40,10].forEach(num => rightTree.add(num));

    let rightTreeTest = rightTree.findMaximumValue(rightTree.root);

    expect(rightTreeTest.value).toEqual(40);
  });

  it('returns an error when root is empty (failure)', () => {
    const failTree = new tree();
    let failTreeTest = failTree.findMaximumValue(failTree.root);

    expect(failTreeTest).toEqual('Error: root is empty.');
  });

});