'use strict';

const SQ = require('../stacks-and-queues');

describe('Stacks and Queue Test', () => {

  it('should successfully push onto a stack', () => {
    const testStack = new SQ.Stack();
    testStack.push(3);

    expect(testStack.top.value).toEqual(3);
  });

  it('should successfully push multiple nodes onto a stack', () => {
    const testStack = new SQ.Stack();
    [3,6,9].forEach(num => testStack.push(num));

    expect(testStack.top.value).toEqual(9);
    expect(testStack.top.next.value).toEqual(6);
    expect(testStack.top.next.next.value).toEqual(3);
  });

  it('should successfully pop off the stack', () => {
    const testStack = new SQ.Stack();
    [3,6].forEach(num => testStack.push(num));
    testStack.pop();

    expect(testStack.top.value).toEqual(3);
    expect(testStack.top.next).toBeNull();
  });

  it('should successfully empty a stack after multiple pops', () => {
    const testStack = new SQ.Stack();
    [3,6,9].forEach(num => testStack.push(num));
    testStack.pop();
    testStack.pop();
    testStack.pop();

    expect(testStack.top).toBeNull();
  });

  it('can successfully peek the next item on the stack', () => {
    const testStack = new SQ.Stack();
    [3,6,9].forEach(num => testStack.push(num));
    let peek = testStack.peek();

    expect(peek).toEqual(9);
  });

  it('can successfully instantiate an empty stack', () => {
    const testStack = new SQ.Stack();

    expect(testStack.top).toBeNull();
  });

  it('should successfully enqueue on a queue', () => {
    const testQueue = new SQ.Queue();
    [3,6,9].forEach(num => testQueue.enqueue(num));

    expect(testQueue.front.value).toEqual(3);
    expect(testQueue.front.next.value).toEqual(6);
    expect(testQueue.rear.value).toEqual(9);
  });

  it('should successfully dequeue off of a queue the expected value', () => {
    const testQueue = new SQ.Queue();
    [3,6,9].forEach(num => testQueue.enqueue(num));
    testQueue.dequeue();

    expect(testQueue.front.value).toEqual(6);
    expect(testQueue.front.next.value).toEqual(9);
  });

  it('should successfully peek into a queue, seeing the expected value', () => {
    const testQueue = new SQ.Queue();
    [3,6,9].forEach(num => testQueue.enqueue(num));
    const peek = testQueue.peek();

    expect(peek).toEqual(3);
  });

  it('should successfully empty a queue after multiple dequeues', () => {
    const testQueue = new SQ.Queue();
    [3,6,9].forEach(num => testQueue.enqueue(num));
    testQueue.dequeue();
    testQueue.dequeue();
    testQueue.dequeue();

    expect(testQueue.front).toBeNull();
    expect
    expect(testQueue.rear).toBeNull();
  });

  it('can successfully instantiate an empty queue', () => {
    const testQueue = new SQ.Queue();

    expect(testQueue.front).toBeNull();
  });

});