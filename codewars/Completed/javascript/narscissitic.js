const calc = value => {
  // count val
  const index = String(value).length;
  let numbers = Array.from(String(value), Number);
  numbers = numbers.map(val => Math.pow(val, index));
  const checker = numbers.reduce((acc, curr) => acc + curr);
  return checker === value;
};

console.log(calc(153));
