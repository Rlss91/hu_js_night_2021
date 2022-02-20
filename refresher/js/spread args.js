const sumAll = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
};

console.log("sumAll", sumAll(7, 11, 9));

const sumEvenOnly = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    console.log(`numbers[i=${i}]`, numbers[i]);
    if (numbers[i] % 2 == 0) {
      sum += numbers[i];
    }
  }
  return sum;
};

console.log("sumEvenOnly", sumEvenOnly(1, 2, 3, 4, 5, 6, 7, 8, 9));
