'use script';

let input;
let total = 0;

do {
  input = prompt(
    `Текущий результат: ${total}\nВведите операцию в формате <операнд><число>:`,
  );
  if (input !== null) {
    const operation = input.slice(0, 1);

    if (
      operation === '+' ||
      operation === '-' ||
      operation === '/' ||
      operation === '*'
    ) {
      const number = Number(input.slice(1, input.length));

      let result;

      if (operation === '+') {
        result = total + number;
      } else if (operation === '-') {
        result = total - number;
      } else if (operation === '/') {
        result = total / number;
      } else if (operation === '*') {
        result = total * number;
      }

      alert('Результат операции 0' + operation + number + ' = ' + result);

      total = result;
    } else {
      alert('операция недоступна');
    }
  } else if (input === null) {
    alert(`Общая сумма чисел равна ${total}`);
  }
} while (input !== null);
