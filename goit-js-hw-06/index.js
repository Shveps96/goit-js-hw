'use script';

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

////////////////////task_1////////////////////////////////
function getUserNames(users) {
  return users.map(user => user.name);
}

console.log('task_1', getUserNames(users));

////////////////////task_2////////////////////////////////
function getUsersWithEyeColor(users, color) {
  return users.filter(user => user.eyeColor === color);
}
console.log('task_2', getUsersWithEyeColor(users, 'blue'));

////////////////////task_3////////////////////////////////
function getUsersWithGender(users, gender) {
  return users.filter(user => user.gender === gender).map(user => user.name);
}

console.log('task_3', getUsersWithGender(users, 'male'));

////////////////////task_4////////////////////////////////
function getInactiveUsers(users) {
  return users.filter(user => !user.isActive);
}

console.log('task_4', getInactiveUsers(users));

////////////////////task_5////////////////////////////////
function getUserWithEmail(users, email) {
  return users.find(user => user.email === email);
}

console.log('task_5.1', getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log('task_5.2', getUserWithEmail(users, 'elmahead@omatom.com'));

////////////////////task_6////////////////////////////////
function getUsersWithAge(users, min, max) {
  return users.filter(user => user.age > min && user.age < max);
}

console.log('task_6.1', getUsersWithAge(users, 20, 30));
console.log('task_6.2', getUsersWithAge(users, 30, 40));

////////////////////task_7////////////////////////////////
function calculateTotalBalance(users) {
  return users.reduce((total, value) => total + value.balance, 0);
}

console.log('task_7', calculateTotalBalance(users));

////////////////////task_8////////////////////////////////
function getUsersWithFriend(objects, friendName) {
  return objects
    .filter(object => object.friends.includes(friendName))
    .map(object => object.name);
}

console.log('task_8.1', getUsersWithFriend(users, 'Briana Decker'));
console.log('task_8.2', getUsersWithFriend(users, 'Goldie Gentry'));

////////////////////task_9////////////////////////////////
function getNamesSortedByFriendsCount(objects) {
  return [...objects]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(object => object.name);
}

console.log('task_9', getNamesSortedByFriendsCount(users));

////////////////////task_10////////////////////////////////
function getSortedUniqueSkills(objects) {
  return objects
    .reduce((total, object) => total.concat(object.skills), [])
    .filter((item, index, array) => index === array.indexOf(item))
    .sort();
}
console.log('task_10', getSortedUniqueSkills(users));
