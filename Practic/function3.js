function sum(value1, value2) {
  return value1 + value2;
}

console.log(sum(5, 10));

const anonim = (name) => `Hello, ${name}`;
console.log(anonim("John"));

const isEven = (value) => (value % 2 === 0 ? true : false);

console.log(isEven(0));

function getMax(value1, value2, value3) {
  return Math.max(value1, value2, value3);
}

console.log(getMax(5, 10, 4));