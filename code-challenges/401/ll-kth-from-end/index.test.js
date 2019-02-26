'use strict';

const List = require('./index');

describe('Code Challenge 07 tests', () => {
  const testList = new List();
  [8, 6, 4, 2].forEach(number => testList.insertAtHead(number));

  it(`Should return 'Exception' if k is greater than the length of the linked list`, () => {
    expect(testList.findKthValue(4)).toBe('Exception');
  });
  it(`Should return 'Exception' if k is not a whole Integer`, () => {
    expect(testList.findKthValue('a')).toBe('Exception');
    expect(testList.findKthValue(-2)).toBe('Exception');
  });
  it('Should return the kth value from the end of a linked list.', () => {
    // expect(testList.findKthValue(2)).toEqual(4);
    expect(testList.findKthValue(0)).toEqual(8);
  });
});