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
  if (input !== null && input !== 0) {
    numbers.push(input);
  }
} while (input !== null);
const countTheSum = function (array) {
  for (let figure of numbers) {
    total += +figure;
  }
  return total;
};
console.log(numbers);
countTheSum(numbers);
console.log(`Общая сумма чисел равна ${total}`);
