'use strict';

const credits = 23580;

const pricePerDroid = 3000;

let message;

let userChoice = prompt('Сколько дроидов вы хотите приобрести?');

if (userChoice === null) {
  message = 'Отменено пользователем!';
} else if (Number(userChoice) < credits - pricePerDroid * userChoice) {
  message = `Вы купили ${Number(userChoice)} дроидов, на счету осталось ${
    credits - pricePerDroid * userChoice
  } кредитов.`;
} else {
  message = `Недостаточно средств на счету!`;
}

console.log(message);
