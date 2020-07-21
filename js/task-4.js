"use strict";
const formatString = function (string) {
  let newString;
  if (string.length < 40) {
    return string;
  }
  if (string.length > 40) {
    let newArray = string.split("");
    newArray.length = 40;
    newString = `${newArray.join("")}...`;
    return newString;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// вернется форматированная строка
