'use strict';

/////////////////////////task-1////////////////////////////////////////

const categories = document.querySelector('#categories');

console.log(`В списке ${categories.children.length} категории.`);

categories.querySelectorAll('.item').forEach(item => {
    console.log(`Категория: ${item.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${item.querySelector('ul').children.length}`);
});


/////////////////////////task-2////////////////////////////////////////

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientList = ingredients.map(item => {
    const list = document.createElement('li');
    list.textContent = item;
    
    return list;
  });

  document.querySelector('#ingredients').prepend(...ingredientList);


/////////////////////////task-3////////////////////////////////////////

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

let imgLi = ``;
images.forEach(
  image => (imgLi += `<li><img src="${image.url}" alt="${image.alt}" /></li>`),
);
  document.querySelector('#gallery').insertAdjacentHTML('beforeend', imgLi);


/////////////////////////task-4////////////////////////////////////////


let counterValue = 0;

function increment() {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  document.querySelector('#value').textContent = counterValue;
}

const incrementButton = document.querySelector(
  '#counter button[data-action="increment"]',
);
const decrementButton = document.querySelector(
  '#counter button[data-action="decrement"]',
);

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);

/////////////////////////task-5////////////////////////////////////////

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function inputStranger(event) {
  nameInput.value
    ? (nameOutput.textContent = event.currentTarget.value)
    : (nameOutput.textContent = 'незнакомец');
}

nameInput.addEventListener('input', inputStranger);

/////////////////////////task-6////////////////////////////////////////

const validationInput = document.querySelector('#validation-input');

function validationInputBlur() {
  if (validationInput.value.length === 6) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
}

validationInput.addEventListener('blur', validationInputBlur);

/////////////////////////task-7////////////////////////////////////////

const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function fontSizeChange() {
  text.setAttribute('style', `font-size: ${fontSizeControl.value}px`);
}

fontSizeControl.addEventListener('input', fontSizeChange);