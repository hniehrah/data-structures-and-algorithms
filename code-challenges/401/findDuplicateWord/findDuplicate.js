'use strict';

const findFirstRepeatedWord = (string) => {
  let obj = {};
  let str = '';

  if (!string){
    return 'Error: String is empty. Try again.'
  }

  for (let i = 0; i < string.length + 1; i++) {
    if (obj[str]) {
      return str;
    }

    let spaceOrPunctuation = /\W/gm.test(string[i]);

    if (spaceOrPunctuation && str !== '') {
      obj[str] = true;
      str = '';
    } else if (!spaceOrPunctuation) {
      str += string[i].toLowerCase();
    }
  }
  return 'No duplicates found.'
};

module.exports = findFirstRepeatedWord;