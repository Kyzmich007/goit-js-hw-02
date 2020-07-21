"use strict";
const findLongestWord = function (string) {
  const arrayOfStr = string.split(" ");
  let longestWord;
  let longest = 0;
  for (let i = 0; i < arrayOfStr.length; i += 1) {
    if (longest < arrayOfStr[i].length) {
      longest = arrayOfStr[i].length;
      longestWord = arrayOfStr[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
