'use script';

const total = 100;
const ordered = 50;

const isInRange = total > ordered;

if (isInRange) {
  console.log('Заказ оформлен, с вами свяжется менеджер');
} else {
  console.log('На складе недостаточно твоаров!');
}
