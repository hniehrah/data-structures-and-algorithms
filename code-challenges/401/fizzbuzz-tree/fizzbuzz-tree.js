'use strict';

const fizzbuzzTree = (root) => {
  //Base case
  if (root === null){
    return;
  }

  //Recursive case
  if (root.value % 3 === 0 && root.value % 5 === 0){
    root.value = 'fizzbuzz';
  } else {
    if (root.value % 3 === 0){
      root.value = 'fizz';
    } else if (root.value % 5 === 0){
      root.value = 'buzz';
    }
  }

  return root;
};

module.exports = fizzbuzzTree;