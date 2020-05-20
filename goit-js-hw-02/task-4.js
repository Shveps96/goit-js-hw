'use script';

const formatString = (string, maxSymbol = 40) =>
  string.length > maxSymbol ? `${string.slice(0, maxSymbol - 1)}...` : string;

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));

console.log(formatString('Curabitur ligula sapien.'));

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
