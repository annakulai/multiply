module.exports = function multiply(first, second) {
  if (first === 0 || second === 0) {
    return '0';
  }

  const firstNumber = first.split('').reverse();
  const secondNumber = second.split('').reverse();
  const result = new Array(first.length + second.length).fill(null);

  for (let i = 0; i < firstNumber.length; i++) {
    for (let j = 0; j < secondNumber.length; j++) {
      result[i + j] += firstNumber[i] * secondNumber[j];
    }
  }

  for (let i = 0; i < result.length; i++) {
    if (result[i] >= 10) {
      if (!result[i + 1]) {
        result[i + 1] = null;
      }
      result[i + 1] += Math.trunc(result[i] / 10);
      result[i] %= 10;
    }
  }

  return result.reverse().join('');
}
