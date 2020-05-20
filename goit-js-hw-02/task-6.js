'use script';

let input = 0;
const numbers = [];
let total = 0;

do {
  input = Number(prompt('введите число', ''));
  numbers.push(input);
} while (input !== 0 && input !== null);

for (let i of numbers) {
  total += i;
}

if (numbers.length >= 1) {
  console.log(`Общая сумма чисел равна ${total}`);
} else {
  input;
}
