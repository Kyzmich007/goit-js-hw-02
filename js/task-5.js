"use strict";
const checkForSpam = function (message) {
  const inputText = message.toLowerCase();
  const banWords = ["sale", "spam"];
  let result;
  for (const banWord of banWords) {
    result = inputText.includes(banWord.toLowerCase());
    if (result) {
      return result;
    }
  }
  return result;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM]  How to earn fast money?")); // true
