'use script';

const countTotalSalary = function (employees) {
  let total = 0;
  for (let salary of Object.values(employees)) {
    total += salary;
  }
  return total;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
);

console.log(
  countTotalSalary({
    kiwi: 200,
    ux: 50,
    chelsy: 150,
  }),
);
