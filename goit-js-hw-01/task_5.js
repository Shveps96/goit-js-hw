'use script';

let china = 'Китай';
const chinaPrice = 100;
let chili = 'Чили';
const chiliPrice = 250;
let australia = 'Австралия';
const australiaPrice = 170;
let india = 'Индия';
const indiaPrice = 80;
let jamaica = 'Ямайка';
const jamaicaPrice = 120;

let userChoise = prompt('Укажите страну для доставки товара:');

let userChoiseLC = userChoise.toLowerCase();

let chinaLC = china.toLowerCase();
chiliLC = chili.toLowerCase();
australiaLC = australia.toLowerCase();
indiaLC = india.toLowerCase();
jamaicaLC = jamaica.toLowerCase();

let message;

switch (userChoiseLC) {
  case chinaLC:
    message = `Доставка в ${china} будет стоить ${chinaPrice} кредитов`;
    break;
  case chiliLC:
    message = `Доставка в ${chili} будет стоить ${chiliPrice} кредитов`;
    break;
  case australiaLC:
    message = `Доставка в ${australia} будет стоить ${australiaPrice} кредитов`;
    break;
  case indiaLC:
    message = `Доставка в ${india} будет стоить ${indiaPrice} кредитов`;
    break;
  case jamaicaLC:
    message = `Доставка в ${jamaica} будет стоить ${jamaicaPrice} кредитов`;
    break;
  default:
    alert('В вашей стране доставка не доступна');
}

console.log(message);
