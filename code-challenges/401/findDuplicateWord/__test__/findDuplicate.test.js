'use strict';

const findDuplicate = require('../findDuplicate');

describe('Find Duplicate test', () => {

  it('should successfully find the first duplicate word in a string', () => {
    const testString = 'The blue car has blue seats.';
    const testResult = findDuplicate(testString);

    expect(testResult).toEqual('blue');
  });
  it('should return an error message if the string is empty', () => {
    const testResult = findDuplicate('');

    expect(testResult).toEqual('Error: String is empty. Try again.');
  });
  it('should return an error message if there are no duplicates', () => {
    const testResult = findDuplicate('Hi');
    expect(testResult).toEqual('No duplicates found.');
  });
  it('should successfully return the duplicate word even if attached to one or several punctuation marks', () => {
    const testResult = findDuplicate('The blue car. is a blue  car.');
    expect(testResult).toEqual('blue');
  });

});
