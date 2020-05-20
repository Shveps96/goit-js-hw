'use script';

const checkForSpam = string => {
  const wordArray = string.toLowerCase();
  return wordArray.includes('sale') || wordArray.includes('spam');
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));
