"use strict";
let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число");
  if (isNaN(input)) {
    input = 0;
    alert("Было введено не число, попробуйте еще раз");
  }
  numbers.push(input);
} while (input !== null);
const countTheSum = function (array) {
  for (let figure of numbers) {
    total += +figure;
  }
  return total;
};
countTheSum(numbers);
console.log(`Общая сумма чисел равна ${total}`);
