function digital_root(n) {
  let output;
  const calcSum = (n) => {
    const arrayOfDigits = Array.from(String(n), Number);
    const reducer = arrayOfDigits.reduce((acc, cur) => acc + cur);
    return reducer;
  };
  let counter = String(n).length;
  if (counter == 1) {
    return n;
  } else {
    while (counter > 1) {
      output = calcSum(n);
      counter = String(output).length;
      n = output;
    }
    return output;
  }
}

function digital_root(n) {
  if (n < 10) return n;

  const arrayOfDigits = Array.from(String(n), Number);
  const reducer = arrayOfDigits.reduce((acc, cur) => acc + cur, 0);
  return reducer;
}
console.log(digital_root(132189));
