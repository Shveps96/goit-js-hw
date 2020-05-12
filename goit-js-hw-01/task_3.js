'use script';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let userChoise = prompt('Веддите пароль для авторизации');

if (userChoise === null) {
  message = 'Отменено пользователем!';
} else if (userChoise === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
