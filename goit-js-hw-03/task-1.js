'use script';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

console.log(user.mood);
console.log(user.hobby);
console.log(user.premium);

const keys = Object.keys(user);
for (const key of keys) {
  console.log('Value: ', user[key]);
}
