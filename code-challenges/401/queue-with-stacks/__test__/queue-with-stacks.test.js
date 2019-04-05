'use strict';

const pseudoQueue = require('../queue-with-stacks');

describe('PseudoQueue tests', () => {

  it('should enqueue successfully', () => {
    const testSingle = new pseudoQueue();
    const testMultiple = new pseudoQueue();
    testSingle.enqueue(5);
    [5,10,15].forEach(num => testMultiple.enqueue(num));

    expect(testSingle.stack2.front.value).toEqual(5);
    expect(testMultiple.stack2.front.value).toEqual(5);
    expect(testMultiple.stack2.front.next.value).toEqual(10);
    expect(testMultiple.stack2.front.next.next.value).toEqual(15);
  });

  it('should dequeue successfully', () => {
    const test = new pseudoQueue();
    [5,10,15].forEach(num => test.enqueue(num));

    expect(test.dequeue()).toEqual(5);
  });

});