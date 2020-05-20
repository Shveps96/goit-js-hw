'use script';

const logItems = function (array) {
  for (let i = 1; i < array.length + 1; i += 1) {
    console.log(`${i} -`, array[i - 1]);
  }
};

console.log(logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));
